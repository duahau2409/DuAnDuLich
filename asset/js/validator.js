//đối tượng 
function validator(options) {

    
    function getParent(element, selector) {
        while (element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement
        }
    }
var selectorRules = {}
// hàm thực hiện validate
function validate(inputElement, rule) { 
    
    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)   
    // value: inputElement.value
    //test func: rule.test
    var errorMessage
    // console.log(selectorRules)
    // lấy ra các rule của selector
    var rules = selectorRules[rule.selector]
    // console.log(rules)
    // lặp qua từng rule và kiểm tra
    // nếu có lỗi thì dùng việc kiểm tra
    for(var i=0; i<rules.length ; i++) {
        switch(inputElement.type) {
            case 'radio':
            case 'checkbox':
                errorMessage = rules[i](
                    formElement.querySelector(rule.selector+ ':checked')
                );
                break;
            default:
                errorMessage = rules[i](inputElement.value)
        }
        if(errorMessage) break;
    }

    
    if(errorMessage) {
        errorElement.innerText = errorMessage
        getParent(inputElement, options.formGroupSelector).classList.add('invalid')
    } else {
        errorElement.innerText = ''
        getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
    }
    return !errorMessage
}
// lấy element của form cần validate
var formElement = document.querySelector(options.form);

if(formElement)
{
    //khi submit form
    formElement.onsubmit = function(e) {
        e.preventDefault();
        
        var isFormValid = true;
        // thực hiện lặp qua từng rule và validate
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector)
            var isValid = validate(inputElement,rule)
            if(!isValid) {
                isFormValid = false
            }
        });
       

        
        // console.log(enableInputs)
        if(isFormValid) {
            // console.log('không có lỗi')
            if(typeof options.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                var formValues = Array.from(enableInputs).reduce(function(values,input){
                    switch(input.type){
                        case 'radio':
                            if (input.matches(':checked')) values[input.name] = input.value
                            break;
                        case 'checkbox': 
                            if(!input.matches(':checked')) {
                                values[input.name] = '';
                                return values
                            };

                            if(!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            } 
                            values[input.name].push(input.value)
                           break;
                        case 'file':
                            values[input.name] = input.files
                            break;
                        default:
                            values[input.name] = input.value
                    }
                    
                    return values;
            }, {})
                options.onSubmit(formValues)
            } 
            // trường hợp submit với hành vi mặc định
            else {
                formElement.submit();
            }
           
        }// else {
        //     console.log('có lỗi')
        // }
        // console.log((formValues));
    }
    // xử lý lặp qua mỗi rule và xử lý (lắng nghe sự kiệ blur, input, ...)
    options.rules.forEach(function (rule) {

        // lưu lại các rules trong mỗi input
        if(Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push(rule.test)
        } else {
            selectorRules[rule.selector] = [rule.test]
        }

    var inputElements = formElement.querySelectorAll(rule.selector)
        
    Array.from(inputElements).forEach(function (inputElement) {
            // xử lý trường hợp blur ra khỏi input
            inputElement.onblur = function() {
                validate(inputElement, rule)
            }

            // xử lý mỗi khi người dùng nhập vào input
            inputElement.oninput = function() {
                var errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message')
                errorElement.innerText = ''
                getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
            }
        });
        // console.log(selectorRules)        
    });       
}
}


// định nghĩa của rules
// nguyên tắc của các rules
//1. khi có lỗi ==> trả ra message lỗi
//2. khi hợp lệ ==> không trả ra gì cả (undifine)
validator.isRequired = function(selector) {
return {
    selector: selector,
    test: function(value) {
        return value ? undefined : 'Vui lòng nhập lại'
    }
};
}

validator.isEmail= function(selector) {
return {
    selector: selector,
    test: function(value) {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        return regex.test(value) ? undefined : 'vui lòng nhập lại'
    }
};
}

validator.minLength = function(selector, min) {
return {
    selector: selector,
    test: function(value) {
        return value.length >= min ? undefined : `vui lòng nhập thối thiêu ${min} kí tự`
    }
}
}

validator.isConfirmed = function(selector, getConfirmValue) {
return {
    selector: selector,
    test: function (value) {
        return value === getConfirmValue() ? undefined : 'mật khẩu nhập lại không chính xác'
    }
}
}