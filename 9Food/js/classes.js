
class MenuItem {
    constructor(urlImage, title, text, price, alt, parentSelector, ...classes) {
        this.urlImage = urlImage
        this.title = title
        this.text = text
        this.price = price
        this.classes = classes || 'menu__item'
        this.parent = document.querySelector(parentSelector)
        this.alt = alt
        this.transfer = 27
        this.changeToUAH()
    }

    // долары в гривны
    changeToUAH() {
        this.price = this.price * this.transfer

    }
    // этот метод лучше назвать Render
    MakeMenuItem() {
        const tempDiv = document.createElement('div')

        // rest по умолчанию
        if (this.classes.length === 0) {
            this.tempDiv = 'menu__item'
            tempDiv.classList.add(this.tempDiv)
        } else {
            this.classes.forEach(className => {
                tempDiv.classList.add(className)
            })
        }
        // img передается без кавычек почему-то
        tempDiv.innerHTML = `
        <img src=${this.urlImage} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.text}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
    `
    this.parent.append(tempDiv)
    }
}
// с ссылкой на переменную
const newItem1 = new MenuItem(
    'img/tabs/elite.jpg', 
    'Меню "Круто"' ,
    'Шикарно шикарно шикарно шикарно шикарно шикарно шикарно шикарно шикарно шикарно шикарно',
    30, 
    'nice',
    '[data-menu-items]'
    )
    newItem1.MakeMenuItem()
// без ссылки
new MenuItem(
    'img/tabs/elite.jpg', 
    'Меню "Круто"' , 
    'Шикарно шикарно шикарно шикарно шикарно шикарно шикарно шикарно шикарно шикарно шикарно', 
    20, 
    'nice', 
    '[data-menu-items]'
).MakeMenuItem()
