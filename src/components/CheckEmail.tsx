function checkEmail(): void {
    const emailField = document.querySelector<HTMLInputElement>('#emailField');

    if (emailField) {
        const email: string = emailField.value;

        if (!email.includes('@')) {
            alert('Нет символа @!');
        } else if (!email.includes('.')) {
            alert('Нет символа .!');
        } else {
            alert('Всё отлично! Поздравляем!');
        }
    } else {
        console.error("Элемент с ID '#emailField' не найден.");
    }
}

export default function CheckEmail() {
    return (
        <div className="email container">
            <h3>далекооооо</h3>
            <p>ускакала в поле молодая лооооооооошадь так легкооооооооооо</p>
            <div className="block">
                <div>
                    <h4>Оставайтесь в курсе</h4>
                    <p>Подпишитесь, чтобы получать последние новости и обновления.
                        Обещаем не рассылать вам спам!</p>
                </div>
                <div>
                    <input type="email" id="emailField" placeholder="Введите электронную почту"/>
                    <button onClick={checkEmail}>Подписаться</button>
                </div>
            </div>
        </div>
    )
}
