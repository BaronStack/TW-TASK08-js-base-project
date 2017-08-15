var changeForm = require('./changeForm');
var getForm = changeForm.form();

function judgeNumer(ch) {
    return ((ch - '0') >= 0) ? 1 : 0;
}

function change2Array(inputs) {
    let array = [];
    let num = 0;
    for (let i = 0;i < inputs.length; ++i) {
        if (judgeNumer(inputs.charAt(i)))
            array.push(inputs.charAt(i) - '0');
    }
    return array;
}

function getCD(array) {
    let num = array.reduce(function (pre,cur) {
        return pre + cur;
    });
    return 10 - num % 10;
}

function coding(inputs) {
    let str = '';
    let array = change2Array(inputs);
    let cd = getCD(array);
    array.forEach(function (item) {
        str += getForm[item] + '   ';
    });
    return str + getForm[cd] + '   ';
}

function deCoding(inputs) {
    let arr = inputs.split('   ');
    let result = [];
    for (let i  = 0;i < arr.length - 2; ++ i) {
        if (arr[i].length > 1) {
            result.push(getForm.indexOf(arr[i]));
            if (arr.length > 8  && i === 5)
                result.push('-');
        }
    }
    return result.join('');
}

function postNet(inputs){
    let reg = /(\d{1,3})/;
    let str = '';
    if (inputs.match(reg) !== null) {
        str += coding(inputs);
        return '|   ' + str +  '|';
    }else {
        return str += deCoding(inputs);
    }

}

module.exports = postNet;
