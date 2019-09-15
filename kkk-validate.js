class Rule {
    static isNumber(string, number_flag = true, adorn = '') { //判断数字
        try {
            if (typeof (arguments[1]) !== 'undefined' && typeof (arguments[1]) !== 'string' && typeof (arguments[1]) !== 'boolean') throw new Error(`function isNumber() 参数(${number_flag})类型错误`)
        } catch (error) {
            return error
        }
        if (typeof (arguments[1]) === 'string' && typeof (arguments[2]) === 'boolean') {
            let z = number_flag
            number_flag = adorn
            adorn = z
        } else if (typeof (arguments[1]) === 'string') {
            adorn = arguments[1]
            number_flag = true
        }
        try {
            if (number_flag) {
                if (this.isNumberAll(string, adorn)) throw this.isNumberAll(string, adorn)
                return false
            } else {
                if (!(/^\d+$/).test(string)) throw `${adorn}只能输入整数`
                return false
            }
        } catch (error) {
            return error
        }
    }

    static isNumberAll(string, adorn = '') { //验证数字,包含小数
        try {
            if (!(/^-?\d+\.?\d*$/).test(string)) throw `${adorn}只能输入数字`
            return false
        } catch (error) {
            return error
        }
    }

    static isNumberSL(string, length, adorn = '') { //验证几位小数
        try {
            if (this.isNumber(length, false)) throw new Error(`function isNumberSL() 参数(${length})类型错误, 应该为整数`)
            if (this.isNumberAll(string)) return this.isNumberAll(string, adorn)
            let reg = new RegExp(`^(([1-9][0-9]*)|(([0]\\.\\d{1,${length}}|[1-9][0-9]*\\.\\d{1,${length}})))$`)
            if (!reg.test(string)) throw `${adorn}不能超过${length}位小数`
            return false
        } catch (error) {
            return error
        }
    }

    static isMinNumber(string, min, number_flag = true, adorn = '') { //最小数范围
        try {
            if (typeof (arguments[1]) === 'undefined') throw new Error(`function isMinNumber() 参数不足`)
            if (this.isNumber(min)) throw new Error(`function isMinNumber() 参数(${min})类型错误, 应该为number类型`)
        } catch (error) {
            return error
        }
        if (typeof (arguments[2]) === 'string' && typeof (arguments[3]) === 'boolean') {
            let z = number_flag
            number_flag = adorn
            adorn = z
        } else if (typeof (arguments[2]) === 'string') {
            adorn = arguments[2]
            number_flag = true
        }
        try {
            if (this.isNumber(string, number_flag)) throw this.isNumber(string, number_flag, adorn)
            if (parseFloat(string) < min) throw `${adorn}不能小于${min}`
            return false

        } catch (error) {
            return error
        }
    }

    static isMaxNumber(string, max, number_flag = true, adorn = '') { //最大数范围
        try {
            if (typeof (arguments[1]) === 'undefined') throw new Error(`function isMaxNumber() 参数不足`)
            if (this.isNumber(max)) throw new Error(`function isMaxNumber() 参数(${max})类型错误, 应该为number类型`)
        } catch (error) {
            return error
        }
        if (typeof (arguments[2]) === 'string' && typeof (arguments[3]) === 'boolean') {
            let z = number_flag
            number_flag = adorn
            adorn = z
        } else if (typeof (arguments[2]) === 'string') {
            adorn = arguments[2]
            number_flag = true
        }
        try {
            if (this.isNumber(string, number_flag)) throw this.isNumber(string, number_flag, adorn)
            if (parseFloat(string) > max) throw `${adorn}不能大于${max}`
            return false
        } catch (error) {
            return error
        }
    }

    static isMinMaxNumber(string, min, max, number_flag = true, adorn = '') { //数字的范围
        try {
            if (typeof (arguments[2]) === 'undefined') throw new Error(`function isMinMaxNumber() 参数不足`)
            if (this.isNumber(min)) throw new Error(`function isMinMaxNumber() 参数(${min})类型错误, 应该为number类型`)
            if (this.isNumber(max)) throw new Error(`function isMinMaxNumber() 参数(${max})类型错误, 应该为number类型`)
        } catch (error) {
            return error
        }
        if (typeof (arguments[3]) === 'string' && typeof (arguments[4]) === 'boolean') {
            let z = number_flag
            number_flag = adorn
            adorn = z
        } else if (typeof (arguments[3]) === 'string') {
            adorn = arguments[3]
            number_flag = true
        }
        try {
            if (this.isNumber(string, number_flag)) throw this.isNumber(string, number_flag, adorn)
            if (parseFloat(string) < min || parseFloat(string) > max) throw `${adorn}范围应在${min} - ${max}之间`
            return false
        } catch (error) {
            return error
        }
    }

    static isMinLength(string, min, adorn = '') { //判断最小长度
        try {
            if (typeof (arguments[1]) === 'undefined') throw new Error(`function isMinLenth() 参数不足`)
            if (this.isNumber(min, false)) throw new Error(`function isMinLenth() 参数(${min})类型错误, 应该为整数`)
            if (string.length < min) throw `${adorn}最小长度为${min}个字符`
            return false
        } catch (error) {
            return error
        }
    }

    static isMaxLength(string, max, adorn = '') { //判断最大长度
        try {
            if (typeof (arguments[1]) === 'undefined') throw new Error(`function isMaxLenth() 参数不足`)
            if (this.isNumber(max, false)) throw new Error(`function isMaxLenth() 参数(${max})类型错误, 应该为整数`)
            if (string.length > max) throw `${adorn}最大长度为${max}个字符`
            return false
        } catch (error) {
            return error
        }
    }

    static isLength(string, min, max, adorn = '') { //判断长度
        try {
            if (typeof (arguments[2]) === 'undefined') throw new Error(`function isLength() 参数不足`)
            if (this.isNumber(min, false)) throw new Error(`function isLength() 参数(${min})类型错误, 应该为整数`)
            if (this.isNumber(max, false)) throw new Error(`function isLength() 参数(${max})类型错误, 应该为整数`)
            if (string.length < min || string.length > max) throw `${adorn}长度为${min}-${max}个字符`
            return false
        } catch (error) {
            return error
        }
    }

    static isNull(string, adorn = '') {
        try {
            if(string === '') throw `${adorn}不能为空`
        } catch (error) {
            return error
        }
    }

    static isSpace(string, adorn = '') { //判断是否有空格
        try {
            if(this.isNull(string)) throw this.isNull(string, adorn)
            if ((/(^\s+)|(\s+$)|\s+/g).test(string)) throw `${adorn}不能包含空格`
            return false
        } catch (error) {
            return error
        }
    }

    static isNoCnChar(string, adorn = '') { //判断是否包含汉字
        try {
            if(this.isNull(string)) throw this.isNull(string, adorn)
            if ((/[\u4e00-\u9fa5]/gm).test(string)) throw `${adorn}不能包含汉字`
            return false
        } catch (error) {
            return error
        }
    }

    static isAllCnChar(string, adorn = ``) { //只能输入汉字
        try {
            if (!(/^[\u4e00-\u9fa5]+$/).test(string)) throw `${adorn}只能输入汉字`
            return false
        } catch (error) {
            return error
        }
    }

    static isEnNumUline(string, adorn = '') { //判断英文数字下划线
        try {
            if (!(/^\w+$/).test(string)) throw `${adorn}只能由 英文 数字 下划线组成`
            return false
        } catch (error) {
            return error
        }
    }

    static isUserName(string, min = 3, max = 16, adorn = '') { //判断用户名格式
        if (typeof (arguments[1]) === `string`) {
            adorn = arguments[1]
            min = 3
            max = 16
        }
        try {
            if (this.isNumber(min, false)) throw new Error(`function isPassword() 参数(${min})类型错误, 应该为整数`)
            if (this.isNumber(max, false)) throw new Error(`function isPassword() 参数(${max})类型错误, 应该为整数`)
            if (this.isLength(string, min, max)) throw this.isLength(string, min, max, adorn)
            if (this.isEnNumUline(string)) throw this.isEnNumUline(string, adorn)
            return false
        } catch (error) {
            return error
        }
    }

    static isPassword(string, min = 6, max = 16, adorn = '') { //判断密码格式
        if (typeof (arguments[1]) === `string`) {
            adorn = arguments[1]
            min = 6
            max = 16
        }
        try {
            if (this.isNumber(min, false)) throw new Error(`function isPassword() 参数(${min})类型错误, 应该为整数`)
            if (this.isNumber(max, false)) throw new Error(`function isPassword() 参数(${max})类型错误, 应该为整数`)
            if (this.isSpace(string)) throw this.isSpace(string, adorn)
            if (this.isLength(string, min, max)) throw this.isLength(string, min, max, adorn)
            if (this.isNoCnChar(string)) throw this.isNoCnChar(string, adorn)
            return false
        } catch (error) {
            return error
        }
    }

    static isRepeat(string1, string2, adorn = '') { //判断两次输入相等
        try {
            if (string1 !== string2) throw `${adorn}两次输入不一致`
            return false
        } catch (error) {
            return error
        }
    }

    static isEmail(string) { //判断邮箱格式
        try {
            if (!(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/).test(string)) throw `邮箱格式不正确`
            return false
        } catch (error) {
            return error
        }
    }

    static isUrl(string) { //判断url格式
        try {
            if (!(/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i).test(string)) throw `url格式不正确`
            return false
        } catch (error) {
            return error
        }
    }

    static isPhone(string) { //判断手机号格式
        try {
            if (!(/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/).test(string)) throw `手机号码格式不正确`
            return false
        } catch (error) {
            return error
        }
    }

    static isIdCard(string) { //判断身份证格式
        try {
            if (!(/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/).test(string)) throw `身份证格式不正确`
            return false
        } catch (error) {
            return error
        }
    }

    static group(fn) { //组合验证
        try {
            if(typeof(arguments[arguments.length - 1]) !== 'boolean' || arguments[arguments.length - 1] === true) {
                for (let i in arguments) {
                    if(arguments[i] === true) continue
                    if (arguments[i]) throw arguments[i]
                }
                return false
            } else if(typeof(arguments[arguments.length - 1]) === 'boolean' && arguments[arguments.length - 1] === false) {
                let arr = []
                for(let i = 0; i< arguments.length - 1; i++) {
                    if(arguments[i]) arr.push(arguments[i])
                }
                if(arr.length !== 0) throw arr
                return false
            }
        } catch (error) {
            return error
        }
    }
}

module.exports = Rule