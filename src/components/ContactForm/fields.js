export const fields = {

    name: {
        type: "text",
        name: "name",
        autoComplete: 'off',
        pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        title: "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
        placeholder: 'Ivana Ivana',
        required: true
    },
    number: {
        type: "tel",
        name: "number",
        autoComplete: 'off',
        title: "Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +",
        placeholder: '11-11-11',
        required: true
    }
}