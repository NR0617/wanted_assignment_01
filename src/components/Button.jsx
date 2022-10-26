/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export function Button({ children, type = 'button', ...props }) {
  return (
    <button
      type={type}
      {...props}
      css={css`
        display: block;
        width: 100%;
        background-color: #dc602a;
        border: 0;
        border-radius: 20px;
        color: #fff;
        font-weight: 600;
        letter-spacing: 1.2px;
        cursor: pointer;
      `}
    >
      {children}
    </button>
  );
}
