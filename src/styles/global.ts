import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, input, .room-code, .button.outlined, .question {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
}

textarea {
    background: ${props => props.theme.colors.background};
}

h1, span, h2, .question p, .user-info > span, textarea::placeholder, textarea {
    color: ${props => props.theme.colors.text};
}



.create-room {
    background: ${props => props.theme.colors.secondary};
}

aside, Button, .sc-bdvvtL bKKaYj {
    background: ${props => props.theme.colors.primary};
}

body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
}

.question{
&.answered, &.highlighted {
        background: ${props => props.theme.colors.switchOn}
}
} 

`

