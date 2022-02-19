import { ReactNode } from "react";
import cx from 'classnames';

import "./styles.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  return (
    <div

    // Maneira 'Padrão' de escrever a parte de classes para diferentes estados do botão.
    //   className={`question ${isAnswered ? "answered" : ""} ${
    //     isHighlighted ? "highlighted" : ""

    // Confiugração das classes utilizando a biblioteca Classnames do React

        className={cx(
            'question',
            { answered: isAnswered}, // aplica a classe answered caso isAnswered returns True
            { highlighted: isHighlighted}, // aplica a classe highlighted caso isHighlighted returns True
        )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
