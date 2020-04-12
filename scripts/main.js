let imgTrue = 'icons/true.svg';
let imgFalse = 'icons/false.svg';
let rowsStart = document.getElementById('reportRow');

let reportDescription = [{
    date: '04.10.19 10:23',
    buffer: ['В1 : № 2000460789536: pH 1.09',
        'В2: № 2000460789536: pH 2.00',
        'В3: № 2000460789536: pH 4.01',
        'В4: № 2000460789536: pH 7.00',
        'В5: № 2000460789536: pH 9.21'
    ],
    slope: {value: 98.7,img:imgTrue},
    offset: {value: -0.3, img:imgTrue},
    user: 'Иванов Генадий Петрович'
},
{
    date: '04.10.19 10:23',
    buffer: ['В1 : № 2000460789536: pH 1.09',
        'В2: № 2000460789536: pH 2.00',
        'В3: № 2000460789536: pH 4.01',
        'В4: № 2000460789536: pH 7.00',
        'В5: № 2000460789536: pH 9.21'
    ],
    slope: {value: 98.7,img:imgTrue},
    offset: {value: -0.3, img:imgTrue},
    user: 'Иванов Генадий Петрович'
},
{
    date: '04.10.19 10:23',
    buffer: ['В1 : № 2000460789536: pH 1.09',
        'В2: № 2000460789536: pH 2.00',
        'В3: № 2000460789536: pH 4.01',
        'В4: № 2000460789536: pH 7.00',
        'В5: № 2000460789536: pH 9.21'
    ],
    slope: {value: 98.7,img:imgTrue},
    offset: {value: -0.3, img:imgTrue},
    user: 'Иванов Генадий Петрович'
},
{
    date: '04.10.19 10:23',
    buffer: ['В1 : № 2000460789536: pH 1.09',
        'В2: № 2000460789536: pH 2.00',
        'В3: № 2000460789536: pH 4.01',
        'В4: № 2000460789536: pH 7.00',
        'В5: № 2000460789536: pH 9.21'
    ],
    slope: {value: 90.1,img:imgFalse},
    offset: {value: -0.5, img:imgTrue},
    user: 'Иванов Генадий Петрович'
}];

let getNewRowTable = function(row) {
    let newHTML = "";
    let newBuffer = "";

    row['buffer'].forEach(function(item, i, arr) {
        newBuffer += "<p>" + item + "</p>";
    });

    newHTML = "<td class=\"table-date\">" + row.date + "</td>" +

        "<td class=\"table-buffer\">" + newBuffer + "</td>" +

        "<td>" + "<p>" + row.slope.value + 
        "<img class=\"table-offset\" src=\"" + row.slope.img + "\">"+ "</p>" + "</td>" +

        "<td>" + "<p>" + row.offset.value +
        "<img class=\"table-offset\" src=\"" + row.offset.img + "\">"+ "</p>"+ "</td>" +

        "<td class=\"table-user\">" + row.user + "</td>" ;

    return newHTML;
}

let getNewRowsTableOfReport = function(){

    let new_html_markup = "";

    for (let i = 0; i < reportDescription.length; i++) {
        new_html_markup += "<tr>" + getNewRowTable(reportDescription[i]) + "</tr>";
    }

    return new_html_markup;
}

rowsStart.insertAdjacentHTML('afterend',getNewRowsTableOfReport(reportDescription));