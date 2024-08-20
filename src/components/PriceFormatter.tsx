export default function Price({ value } : {value: number}) {
    return value.toLocaleString("ru-RU") + " ₽";
}