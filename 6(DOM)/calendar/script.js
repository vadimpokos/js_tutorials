let date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();


    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    // calendar functionality
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    if (new Date().getMonth() === date.getMonth() && new Date().getFullYear() === date.getFullYear()) {
        document.querySelector('.title').innerText = `${months[new Date().getMonth()]}\n${new Date().toDateString()}`;
    } else {
        document.querySelector('.title').innerText = `${months[date.getMonth()]}\n${date.toDateString()}`; 
    }

    for(let x = firstDayIndex; x > 0; x--) {
        prevDayNumber = document.createElement('div');
        prevDayNumber.innerText = `${prevLastDay - x + 1}`;
        prevDayNumber.className = 'another-month';
        document.querySelector('.days').append(prevDayNumber);
    }

    for(let i = 1; i <= lastDay; i++) {
        let dayNumber = document.createElement('div');
        dayNumber.innerText = i;
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            dayNumber.className = 'today';
        } else {
            dayNumber.className = 'current-month';
        }
        document.querySelector('.days').append(dayNumber);
    }

    for(let j = 1; j <= nextDays; j++) {
        let nextDayNumber = document.createElement('div');
        nextDayNumber.innerText = j;
        nextDayNumber.className = 'another-month';
        document.querySelector('.days').append(nextDayNumber);
    }

    document.querySelector('.next').addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        document.body.innerHTML = '';
        renderPage();
        renderCalendar();
    })
    
    document.querySelector('.prev').addEventListener('click', () => {
        date.setMonth(date.getMonth() - 1);
        document.body.innerHTML = '';
        renderPage();
        renderCalendar();
    })

}  

// Page gengrating
const renderPage = () => {
    const calendarContainer = {tag: 'div', properties: {className: 'wrapper'}};

    const navigationButton = {tag: 'div', properties: {className: 'title'}};
    const calendarInner = {tag: 'div', properties: {className: 'inner'}};

    const nextBut = {tag: 'input', properties: {type: 'button', value: '→', className: 'slider-but next'}};
    const prevBut = {tag: 'input', properties: {type: 'button', value: '←', className: 'slider-but prev'}};
    let calendarContent = {tag: 'div', properties: {className: 'calendar-content'}};
    let calendarDayNames = {tag: 'div', properties: {className: 'day-names'}};
    let calendarDays = {tag: 'div', properties: {className: 'days'}}

    let arrElemToCreate = [];
    arrElemToCreate.push(calendarContainer);

    function createElem (configArr) {
        let createdElem = configArr.map(item => {
            let element = document.createElement(item.tag);
            Object.entries(item.properties || {}).forEach( ([key, value]) => {
                element[key] = value;
            });
            return element;
        })
        return createdElem;
    }

    function init (arrOfElements, place) {
        arrOfElements.forEach(item => place.append(item))
    }

    function daysCreate() {
        
        const dayNameArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let namedDayArr = dayNameArr.map(item => {
            const day = {tag: 'div', properties: {className: 'day'}};
            day.properties.innerText = item;
            return day;
        })
        

    return namedDayArr;
    }

    init(createElem(arrElemToCreate), document.body);
    arrElemToCreate = [];
    arrElemToCreate.push(navigationButton, calendarInner);
    init(createElem(arrElemToCreate), document.querySelector('.wrapper'));
    arrElemToCreate = [];
    arrElemToCreate.push(prevBut, calendarContent, nextBut);
    init(createElem(arrElemToCreate), document.querySelector('.inner'));
    arrElemToCreate = [];
    arrElemToCreate.push(calendarDayNames, calendarDays);
    init(createElem(arrElemToCreate), document.querySelector('.calendar-content'));
    init(createElem(daysCreate()), document.querySelector('.day-names'));
}

renderPage();
renderCalendar();



