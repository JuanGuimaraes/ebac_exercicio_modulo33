import { fireEvent, render, screen } from '@testing-library/react';
import Post from '../../Post';
import PostComment from '..';

describe("Teste para o componete PostComment", () => {
    test("Deve renderizar o componente corretamente", () => {
        render(<PostComment />)
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test("Deve adicionar dois comentarios", () => {
        render(<PostComment />);

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comentário 1 adicionado via teste',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comentario 2 adicionado via teste',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    })
})