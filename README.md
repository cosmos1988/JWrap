JWrap

Javascript Element Wrapper Class Library


Classes and Methods:
Class: JWrap
  Method: static info() -> text

Class: JAction
  Method: static alert(message) -> void
  Method: static confirm(message) -> this.confirmFn(message)
  Method: static addLoadEvent(fn) -> void
  Method: static idgen() -> parts.join(separator)
  Method: static go(url) -> void
  Method: static back() -> void
  Method: static teleport(url) -> void
  Method: static clipboard(text, fn) -> void
  Method: static sleep(ms) -> void
  Method: static stopwatchStart(fn) -> startTime
  Method: static stopwatchStop(startTime, fn) -> elapsedTime
  Method: static scrollToTop(speed = 1) -> void
  Method: static scrollToBottom(speed = 1) -> void
  Method: static isMobile() -> /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent, )
  Method: static fetch(url, object = {}) -> fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(...
  Method: static dateToString(date) -> date
  Method: static stringToDate(str) -> str
  Method: static today() -> JAction.dateToString(new Date())
  Method: static now() -> `${time.getHours()}:${time.getMinutes()}`

Class: JObject
  Method: getResult() -> this.result
  Method: setTrue() -> this
  Method: setFalse() -> this
  Method: confirm(message = '') -> this
  Method: alert(message = '') -> this
  Method: is(bool) -> this
  Method: call(fn) -> this
  Method: then(fn) -> this
  Method: else(fn) -> this

Class: JElement
  Extends: JObject
  Method: static from(arg1, arg2, arg3) -> this.get(arg1)
  Method: static get(id) -> new this(element)
  Method: static select(parentId, name, index = 0) -> new this(element)
  Method: static create(tagName, id, name, type) -> new this(element)
  Method: constructor(element) -> void
  Method: getElement() -> this.element
  Method: click() -> this
  Method: focus() -> this
  Method: blur() -> this
  Method: scrollIntoView() -> this
  Method: scrollIntoView() -> this
  Method: getText() -> this.element.textContent
  Method: setText(text) -> this
  Method: getStyle() -> this.element.style
  Method: setStyle(property, value) -> this
  Method: getValue() -> this.element.value
  Method: setValue(value) -> this
  Method: replace(currentValue, newValue) -> this
  Method: replaceAll(currentValue, newValue) -> this
  Method: getMax() -> this.element.max
  Method: setMax(time) -> this
  Method: getMin() -> this.element.min
  Method: setMin(time) -> this
  Method: getStep() -> this.element.step
  Method: setStep(sec) -> this
  Method: getInnerHtml() -> this.element.innerHTML
  Method: setInnerHtml(html) -> this
  Method: getOuterHtml() -> this.element.outerHTML
  Method: setOuterHtml(html) -> this
  Method: insertBeforebeginHtml(html) -> this
  Method: insertAfterbeginHtml(html) -> this
  Method: insertBeforeendHtml(html) -> this
  Method: insertAfterendHtml(html) -> this
  Method: removeChild(child) -> this
  Method: replaceChild(newChild, oldChild) -> this
  Method: appendChild(child) -> this
  Method: getDisabled() -> this.element.disabled
  Method: setDisabled(_bool = true) -> this
  Method: getReadonly() -> this.element.readOnly
  Method: setReadonly(_bool = true) -> this
  Method: addDisplayNone() -> this
  Method: removeDisplayNone() -> this
  Method: getClassList() -> this.element.classList
  Method: containsClass(className) -> this.element.classList.contains(className)
  Method: addClass(className) -> this
  Method: removeClass(className) -> this
  Method: addEvent(event, fn) -> this
  Method: addKeyupEvent(fn) -> this
  Method: addKeypressEvent(fn) -> this
  Method: addKeydownEvent(fn) -> this
  Method: addClickEvent(fn) -> this
  Method: addDblclickEvent(fn) -> this
  Method: addDragEvent(fn) -> this
  Method: addDragstartEvent(fn) -> this
  Method: addDragendEvent(fn) -> this
  Method: addDragenterEvent(fn) -> this
  Method: addDragleaveEvent(fn) -> this
  Method: addDragoverEvent(fn) -> this
  Method: addTouchstartEvent(fn) -> this
  Method: addTouchmoveEvent(fn) -> this
  Method: addTouchendEvent(fn) -> this
  Method: addTouchcancelEvent(fn) -> this
  Method: addInputEvent(fn) -> this
  Method: addChangeEvent(fn) -> this
  Method: addFocusEvent(fn) -> this
  Method: addBlurEvent(fn) -> this
  Method: addFocusinEvent(fn) -> this
  Method: addFocusoutEvent(fn) -> this
  Method: dispatchInputEvent() -> this
  Method: dispatchChangeEvent() -> this

Class: JForm
  Extends: JElement
  Method: setAction(url) -> this
  Method: setMethod(method) -> this
  Method: setGet() -> this
  Method: setPost() -> this
  Method: setContentType(contentType) -> this
  Method: setMultipart() -> this
  Method: setTarget(target) -> this
  Method: getElement(name, index) -> JElement.select(this.element, name, index)
  Method: getInput(name, index) -> JInput.select(this.element, name, index)
  Method: getInputs(name) -> JInputs.select(this.element, name)
  Method: getSelect(name, index) -> JSelect.select(this.element, name, index)
  Method: getFile(name, index) -> JFile.select(this.element, name, index)
  Method: getRadio(name, index) -> JRadio.select(this.element, name, index)
  Method: getRadios(name) -> JRadios.select(this.element, name)
  Method: getCheckbox(name, index) -> JCheckbox.select(this.element, name, index)
  Method: getCheckboxes(name) -> JCheckboxes.select(this.element, name)
  Method: remove(name, index = 0) -> this
  Method: reset() -> void
  Method: toObject() -> obj
  Method: submit(url) -> this
  Method: fetch(url) -> fetch(url, { method: 'POST', body: new FormData(this.element), }) .then((response) => { if (!respons...

Class: JButton
  Extends: JElement

Class: JTextarea
  Extends: JElement

Class: JSelect
  Extends: JElement
  Method: selectedValue() -> this.element.options[this.element.selectedIndex].value
  Method: selectedText() -> this.element.options[this.element.selectedIndex].text
  Method: selectByValue(value) -> this
  Method: selectByText(text) -> this
  Method: selectByIndex(index) -> this
  Method: addOption(text, value) -> this
  Method: removeAllOptions() -> this
  Method: removeOptionByValue(value) -> this
  Method: removeOptionByText(text) -> this
  Method: removeOptionByIndex(index) -> this

Class: JProgress
  Extends: JElement

Class: JDatalist
  Extends: JElement
  Method: addOption(value, text) -> this
  Method: removeAllOptions() -> this
  Method: removeOptionByValue(value) -> this
  Method: removeOptionByText(text) -> this
  Method: removeOptionByIndex(index) -> this

Class: JInput
  Extends: JElement
  Method: isEmpty() -> this
  Method: isNotEmpty() -> this
  Method: isEqual(value) -> this
  Method: isNotEqual(value) -> this
  Method: isIncludes(value) -> this
  Method: isNotIncludes(value) -> this
  Method: isGreaterValue(number) -> this
  Method: isLessValue(number) -> this
  Method: isGreaterLength(number) -> this
  Method: isLessLength(number) -> this
  Method: isValueBetween(start, end) -> this
  Method: isNotValueBetween(start, end) -> this
  Method: isLengthBetween(start, end) -> this
  Method: isNotLengthBetween(start, end) -> this
  Method: isNumber() -> this
  Method: isNotNumber() -> this
  Method: isOnlyEnglish() -> this
  Method: isNotOnlyEnglish() -> this
  Method: isLowercase() -> this
  Method: isNotLowercase() -> this
  Method: isUppercase() -> this
  Method: isNotUppercase() -> this
  Method: isOnlyKorean() -> this
  Method: isNotOnlyKorean() -> this
  Method: isOnlyJapanese() -> this
  Method: isNotOnlyJapanese() -> this
  Method: isOnlyHiragana() -> this
  Method: isNotOnlyHiragana() -> this
  Method: isOnlyKatakana() -> this
  Method: isNotOnlyKatakana() -> this
  Method: isOnlyKanji() -> this
  Method: isNotOnlyKanji() -> this
  Method: isOnlyChanese() -> this
  Method: isNotOnlyChanese() -> this
  Method: isIncludesSpace() -> this
  Method: isNotIncludesSpace() -> this
  Method: isIncludesSpchar() -> this
  Method: isNotIncludesSpchar() -> this
  Method: isId() -> this
  Method: isNotId() -> this
  Method: isPassword() -> this
  Method: isNotPassword() -> this
  Method: isStrongPassword() -> this
  Method: isNotStrongPassword() -> this
  Method: isEmail() -> this
  Method: isNotEmail() -> this
  Method: isUrl() -> this
  Method: isNotUrl() -> this
  Method: isPhoneNumber() -> this
  Method: isNotPhoneNumber() -> this
  Method: isPostalCode() -> this
  Method: isNotPostalCode() -> this
  Method: test(pattern) -> this
  Method: setRequired(bool = true) -> this
  Method: setReportMessage(message = '') -> this
  Method: reportValidity() -> this
  Method: checkValidity() -> this
  Method: setPattern(pattern) -> this
  Method: setNumberCheckPattern() -> this
  Method: setEnglishCheckPattern() -> this
  Method: setLowercaseCheckPattern() -> this
  Method: setUppercaseCheckPattern() -> this
  Method: setKoreanCheckPattern() -> this
  Method: setJapaneseCheckPattern() -> this
  Method: setHiraganaCheckPattern() -> this
  Method: setKatakanaCheckPattern() -> this
  Method: setKanjiCheckPattern() -> this
  Method: setChineseCheckPattern() -> this
  Method: setIncludesSpaceCheckPattern() -> this
  Method: setIncludesSpcharCheckPattern() -> this
  Method: setIdCheckPattern() -> this
  Method: setPasswordCheckPattern() -> this
  Method: setStrongPasswordCheckPattern() -> this
  Method: setEmailCheckPattern() -> this
  Method: setUrlCheckPattern() -> this
  Method: setPhoneNumberCheckPattern() -> this
  Method: setPostalCodeCheckPattern() -> this
  Method: allowNumberOnly(fn) -> this
  Method: allowEnglishOnly(fn) -> this
  Method: allowLowercaseOnly(fn) -> this
  Method: allowKoreanOnly(fn) -> this
  Method: allowJapaneseOnly(fn) -> this
  Method: allowHiraganaOnly(fn) -> this
  Method: allowKatakanaOnly(fn) -> this
  Method: allowKanjiOnly(fn) -> this
  Method: allowChineseOnly(fn) -> this
  Method: disallowSpace(fn) -> this
  Method: disallowSpchar(fn) -> this
  Method: allowIdPattern(fn) -> this
  Method: allowEmailPattern(fn) -> this
  Method: allowUrlPattern(fn) -> this
  Method: allowPhoneNumberPattern(fn) -> this
  Method: allowPostalCodePattern(fn) -> this
  Method: addFocusoutReportEvent() -> this
  Method: addInputCheckEvent(pattern, fn) -> this
  Method: removeFocusoutReportEvent() -> this
  Method: removeInputCheckEvent(pattern, fn) -> this

Class: JHidden
  Extends: JInput

Class: JText
  Extends: JInput

Class: JNumber
  Extends: JInput

Class: JDate
  Extends: JInput
  Method: getDay() -> JAction.stringToDate(this.element.value).getUTCDay()
  Method: setToday() -> this
  Method: isMonthsAgo(months) -> this
  Method: isMonthsLater(months) -> this
  Method: isDaysAgo(days) -> this
  Method: isDaysLater(days) -> this
  Method: isDateAgo(targetDate) -> this
  Method: isDateLater(targetDate) -> this
  Method: disableMonthsAgo(months, targetDate = JAction.today()) -> this
  Method: disableMonthsLater(months, targetDate = JAction.today()) -> this
  Method: disableDaysAgo(days, targetDate = JAction.today()) -> this
  Method: disableDaysLater(days, targetDate = JAction.today()) -> this
  Method: addDays(days) -> this
  Method: subDays(days) -> this
  Method: addMonths(months) -> this
  Method: subMonths(months) -> this

Class: JTime
  Extends: JInput
  Method: setNow() -> this
  Method: isHoursAgo(hours) -> this
  Method: isHoursLater(hours) -> this
  Method: isMinutesAgo(minutes) -> this
  Method: isMinutesLater(minutes) -> this
  Method: isTimeAgo(time) -> this
  Method: isTimeLater(time) -> this
  Method: addHours(hours) -> this
  Method: subHours(hours) -> this
  Method: addMinutes(minutes) -> this
  Method: subMinutes(minutes) -> this

Class: JEmail
  Extends: JInput

Class: JFile
  Extends: JInput
  Method: isGreaterFilesCount(number) -> this
  Method: isLessFilesCount(number) -> this
  Method: isFilesCountBetween(start, end) -> this
  Method: isNotFilesCountBetween(start, end) -> this

Class: JColor
  Extends: JInput

Class: JRange
  Extends: JInput

Class: JRadio
  Extends: JInput
  Method: check(bool = true) -> this
  Method: isChecked() -> this.element.checked

Class: JCheckbox
  Extends: JInput
  Method: check(bool = true) -> this
  Method: isChecked() -> this.element.checked

Class: JInputButton
  Extends: JInput

Class: JSearch
  Extends: JInput
  Method: setList(listId) -> this
  Method: getList() -> this.element.list

Class: JElements
  Extends: JObject
  Method: static from(arg1, arg2) -> this.get(arg1)
  Method: static get(name) -> new this(elements)
  Method: static select(parentId, name) -> new this(elements)
  Method: constructor(elements) -> void
  Method: getElements() -> this.elements
  Method: setPassOption(number) -> this
  Method: foreach(fn) -> this
  Method: setText(text) -> this
  Method: setValue(value) -> this
  Method: replace(value) -> this
  Method: replaceAll(value) -> this
  Method: setMax(value) -> this
  Method: setMin(value) -> this
  Method: setStep(value) -> this
  Method: function(data) -> this
  Method: setInnerHtml(html) -> this
  Method: setOuterHtml(html) -> this
  Method: insertBeforebeginHtml(html) -> this
  Method: insertAfterbeginHtml(html) -> this
  Method: insertAfterendHtml(html) -> this
  Method: removeChild(child) -> this
  Method: replaceChild(newChild, oldChild) -> this
  Method: appendChild(child) -> this
  Method: setDisabled(_bool) -> this
  Method: setReadonly(_bool) -> this
  Method: addDisplayNone() -> this
  Method: removeDisplayNone() -> this
  Method: addClass(className) -> this
  Method: removeClass(className) -> this
  Method: addEvent(event, fn) -> this
  Method: addKeyupEvent(fn) -> this
  Method: addKeypressEvent(fn) -> this
  Method: addKeydownEvent(fn) -> this
  Method: addClickEvent(fn) -> this
  Method: addDblclickEvent(fn) -> this
  Method: addDragEvent(fn) -> this
  Method: addDragstartEvent(fn) -> this
  Method: addDragendEvent(fn) -> this
  Method: addDragenterEvent(fn) -> this
  Method: addDragleaveEvent(fn) -> this
  Method: addDragoverEvent(fn) -> this
  Method: addTouchstartEvent(fn) -> this
  Method: addTouchmoveEvent(fn) -> this
  Method: addTouchendEvent(fn) -> this
  Method: addTouchcancelEvent(fn) -> this
  Method: addInputEvent(fn) -> this
  Method: addChangeEvent(fn) -> this
  Method: addFocusEvent(fn) -> this
  Method: addFocusinEvent(fn) -> this
  Method: addFocusoutEvent(fn) -> this
  Method: addFocusoutReportEvent() -> this
  Method: addInputCheckEvent(pattern, fn) -> this

Class: JInputs
  Extends: JElements
  Method: isEmpty() -> this
  Method: isNotEmpty() -> this
  Method: isEqual(value) -> this
  Method: isNotEqual(value) -> this
  Method: isIncludes(value) -> this
  Method: isNotIncludes(value) -> this
  Method: isGreaterValue(number) -> this
  Method: isLessValue(number) -> this
  Method: isGreaterLength(number) -> this
  Method: isLessLength(number) -> this
  Method: isValueBetween(start, end) -> this
  Method: isNotValueBetween(start, end) -> this
  Method: isLengthBetween(start, end) -> this
  Method: isNotLengthBetween(start, end) -> this
  Method: isNumber() -> this
  Method: isNotNumber() -> this
  Method: isOnlyEnglish() -> this
  Method: isNotOnlyEnglish() -> this
  Method: isLowercase() -> this
  Method: isNotLowercase() -> this
  Method: isUppercase() -> this
  Method: isNotUppercase() -> this
  Method: isOnlyKorean() -> this
  Method: isNotOnlyKorean() -> this
  Method: isOnlyJapanese() -> this
  Method: isNotOnlyJapanese() -> this
  Method: isOnlyHiragana() -> this
  Method: isNotOnlyHiragana() -> this
  Method: isOnlyKatakana() -> this
  Method: isOnlyKanji() -> this
  Method: isNotOnlyKanji() -> this
  Method: isOnlyChanese() -> this
  Method: isNotOnlyChanese() -> this
  Method: isIncludesSpace() -> this
  Method: isNotIncludesSpace() -> this
  Method: isIncludesSpchar() -> this
  Method: isNotIncludesSpchar() -> this
  Method: isId() -> this
  Method: isNotId() -> this
  Method: isPassword() -> this
  Method: isNotPassword() -> this
  Method: isStrongPassword() -> this
  Method: isNotStrongPassword() -> this
  Method: isEmail() -> this
  Method: isNotEmail() -> this
  Method: isUrl() -> this
  Method: isNotUrl() -> this
  Method: isPhoneNumber() -> this
  Method: isNotPhoneNumber() -> this
  Method: isPostalCode() -> this
  Method: isNotPostalCode() -> this
  Method: test(pattern) -> this
  Method: setRequired(bool = true) -> this
  Method: setReportMessage(message = '') -> this
  Method: reportValidity() -> this
  Method: checkValidity() -> this
  Method: setPattern(pattern) -> this
  Method: setNumberCheckPattern() -> this
  Method: setEnglishCheckPattern() -> this
  Method: setLowercaseCheckPattern() -> this
  Method: setUppercaseCheckPattern() -> this
  Method: setKoreanCheckPattern() -> this
  Method: setJapaneseCheckPattern() -> this
  Method: setHiraganaCheckPattern() -> this
  Method: setKatakanaCheckPattern() -> this
  Method: setKanjiCheckPattern() -> this
  Method: setChineseCheckPattern() -> this
  Method: setIncludesSpaceCheckPattern() -> this
  Method: setIncludesSpcharCheckPattern() -> this
  Method: setIdCheckPattern() -> this
  Method: setPasswordCheckPattern() -> this
  Method: setStrongPasswordCheckPattern() -> this
  Method: setEmailCheckPattern() -> this
  Method: setUrlCheckPattern() -> this
  Method: setPhoneNumberCheckPattern() -> this
  Method: setPostalCodeCheckPattern() -> this
  Method: allowNumberOnly(fn) -> this
  Method: allowEnglishOnly() -> this
  Method: allowLowercaseOnly() -> this
  Method: allowKoreanOnly() -> this
  Method: allowJapaneseOnly() -> this
  Method: allowHiraganaOnly() -> this
  Method: allowKatakanaOnly() -> this
  Method: allowKanjiOnly() -> this
  Method: allowChineseOnly() -> this
  Method: disallowSpace() -> this
  Method: disallowSpchar() -> this
  Method: allowIdPattern() -> this
  Method: allowEmailPattern() -> this
  Method: allowUrlPattern() -> this
  Method: allowPhoneNumberPattern() -> this
  Method: allowPostalCodePattern() -> this

Class: JRadios
  Extends: JInputs
  Method: check(index = 0, bool = true) -> this
  Method: checkByValue(value, bool = true) -> this
  Method: getCheckedValue() -> element.value

Class: JCheckboxes
  Extends: JInputs
  Method: check(index = 0, bool = true) -> this
  Method: checkByValue(value, bool = true) -> this
  Method: getCheckedValues() -> values
  Method: getCheckedCount() -> count
  Method: getSumOfCheckedValues() -> sum
  Method: checkAll(bool = true) -> this

Class: JError
  Extends: Error
  Method: constructor(msg) -> void

Class: JActionFetchError
  Extends: JError
  Method: constructor(url) -> void

Class: JElementNullError
  Extends: JError
  Method: constructor(varName) -> void

Class: JElementInstantiationError
  Extends: JError
  Method: constructor(elementTpye) -> void

Class: JElementIdError
  Extends: JError
  Method: constructor(id) -> void

Class: JElementTagNameError
  Extends: JError
  Method: constructor(id) -> void

Class: JElementTypeError
  Extends: JError
  Method: constructor(id) -> void

Class: JElementsNameError
  Extends: JError
  Method: constructor(parentId, name) -> void

Class: JElementsTagNameError
  Extends: JError
  Method: constructor(parentId, name) -> void

Class: JElementsTypeError
  Extends: JError
  Method: constructor(parentId, name) -> void

Class: JElementsIndexOutOfBoundsError
  Extends: JError
  Method: constructor(parentId, name, index) -> void

Class: JFormFetchError
  Extends: JError
  Method: constructor(url) -> void
