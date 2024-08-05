class JWrap {
  static name = 'JWrap';
  static version = '2024.8.5';
  static author = 'Joo Yong-jin';
  
  static info() {
    const text =
`
    ■■■ ■     ■
      ■ ■  ■  ■ ■   ■ ■■■■  ■■■■■
      ■ ■  ■  ■ ■ ■    ■■■■ ■   ■
■     ■ ■  ■  ■ ■■    ■   ■ ■■■■■
 ■■■■■   ■■ ■■  ■     ■■■■■ ■

name: ${this.name}
version: ${this.version}
author: ${this.author}
    `;
    return text;
  }
}

class JAction {
  static alertFn = (message) => alert(message);
  
  static confirmFn = (message) => confirm(message);
  
  static idgenSeparator = '-';
  
  static alert(message) {
    this.alertFn(message);
  }
  
  static confirm(message) {
    return this.confirmFn(message);
  }
  
  static addLoadEvent(fn) {
    document.addEventListener('DOMContentLoaded', fn);
  }
  
  static idgen(...parts) {
    let separator = this.idgenSeparator;
    if (separator == null) {
      separator = '-';
    }
    return parts.join(separator);
  }
  
  static go(url) {
    window.location.assign(url);
  }
  
  static back() {
    window.history.back();
  }
  
  static teleport(url) {
    window.location.replace(url);
  }
  
  static clipboard(text, fn) {
    navigator.clipboard.writeText(text).then(fn);
  }
  
  static sleep(ms) {
    let start = new Date().getTime();
    while (new Date().getTime() < start + ms);
  }
  
  static stopwatchStart(fn) {
    let currentDate = new Date();
    let startTime = currentDate.getTime();
    if (fn instanceof Function) {
      fn(startTime);
    } else {
      console.log(`Stopwatch start: ${currentDate}`);
    }
    return startTime;
  }
  
  static stopwatchStop(startTime, fn) {
    let currentDate = new Date();
    let endTime = currentDate.getTime();
    let elapsedTime = endTime - startTime;
    if (fn instanceof Function) {
      fn(elapsedTime);
    } else {
      console.log(`Stopwatch stop: ${currentDate}`);
      const millisecondsInASecond = 1000;
      const secondsInAMinute = 60;
      const minutesInAnHour = 60;
      const milliseconds = elapsedTime % millisecondsInASecond;
      const totalSeconds = Math.floor(elapsedTime / millisecondsInASecond);
      const seconds = totalSeconds % secondsInAMinute;
      const totalMinutes = Math.floor(totalSeconds / secondsInAMinute);
      const minutes = totalMinutes % minutesInAnHour;
      const hours = Math.floor(totalMinutes / minutesInAnHour);
      console.log(
      `Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}, Milliseconds: ${milliseconds}`,
      );
    }
    return elapsedTime;
  }
  
  static scrollToTop(speed = 1) {
    if (speed === 0) speed = 1;
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(() => JAction.scroll_to_top(speed));
      window.scrollTo(window.scrollX, c - c / speed);
    }
  }
  
  static scrollToBottom(speed = 1) {
    if (speed === 0) speed = 1;
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    const document_height = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
    );
    const target = document_height - window.innerHeight;
    if (c < target) {
      window.requestAnimationFrame((JAction.scroll_to_bottom = speed));
      window.scrollTo(window.scrollX, c + (target - c) / speed);
    }
  }
  
  static isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
    );
  }
  
  static async fetch(url, object = {}) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      const contentType = response.headers.get('Content-Type');
      
      if (contentType.includes('application/json')) {
        return response.json();
      } else if (contentType.includes('text')) {
        return response.text();
      } else if (contentType.includes('form-data')) {
        return response.formData();
      } else if (
      contentType.includes('image') ||
      contentType.includes('video') ||
      contentType.includes('audio')
      ) {
        return response.blob();
      } else {
        return response.arrayBuffer();
      }
    })
    .catch(() => {
      throw new JActionFetchError(url);
    });
  }
  
  static dateToString(date) {
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    return date;
  }
  
  static stringToDate(str) {
    if (typeof str === 'string') {
      return new Date(Date.parse(str));
    }
    return str;
  }
  
  static today() {
    return JAction.dateToString(new Date());
  }
  
  static now() {
    const time = new Date();
    return `${time.getHours()}:${time.getMinutes()}`;
  }
}

class JObject {
  result = true;
  
  getResult() {
    return this.result;
  }
  
  setTrue() {
    this.result = true;
    return this;
  }
  
  setFalse() {
    this.result = false;
    return this;
  }
  
  confirm(message = '') {
    if (this.result !== true) return this;
    this.result = JAction.confirm(message);
    return this;
  }
  
  alert(message = '') {
    if (this.result !== true) return this;
    JAction.alert(message);
    return this;
  }
  
  is(bool) {
    if (typeof bool === 'boolean') {
      this.result = bool;
    }
    return this;
  }
  
  call(fn) {
    if (typeof fn === 'function') {
      let result = fn(this);
      if (result === true) {
        this.is(true);
      } else if (result === false) {
        this.is(false);
      }
    }
    return this;
  }
  
  then(fn) {
    if (this.result !== true) return this;
    this.call(fn);
    return this;
  }
  
  else(fn) {
    if (this.result === true) return this;
    this.call(fn);
    return this;
  }
}

class JElement extends JObject {
  element;
  
  static from(arg1, arg2, arg3) {
    if (arg1 && arg2) {
      return this.select(arg1, arg2, arg3);
    } else {
      return this.get(arg1);
    }
  }
  
  static get(id) {
    let element = document.getElementById(id);
    if (!element) {
      throw new JElementIdError(id);
    }
    if (this.tagName) {
      if (element.tagName !== this.tagName) {
        throw new JElementTagNameError(element.id);
      }
    }
    if (this.type) {
      if (element.type !== this.type) {
        throw new JElementTypeError(element.id);
      }
    }
    return new this(element);
  }
  
  static select(parentId, name, index = 0) {
    let parentElement = document.getElementById(parentId);
    if (!parentElement) {
      throw new JElementIdError(parentId);
    }
    let elements = Array.from(
    parentElement.querySelectorAll(`[name="${name}"]`),
    );
    if (!elements) {
      throw new JElementsNameError(name);
    }
    if (index > elements.length - 1) {
      throw new JElementsIndexOutOfBoundsError(name, index);
    }
    let element = elements[index];
    if (this.tagName) {
      if (element.tagName !== this.tagName) {
        throw new JElementTagNameError(element.id);
      }
    }
    if (this.type) {
      if (element.type !== this.type) {
        throw new JElementTypeError(element.id);
      }
    }
    return new this(element);
  }
  
  static create(tagName, id, name, type) {
    let element;
    if (tagName) {
      element = document.createElement(tagName);
    } else {
      element = document.createElement(this.tagName);
      if (this.type) {
        element.type = this.type;
      }
    }
    if (id) element.id = id;
    if (name) element.name = name;
    if (type) element.type = type;
    return new this(element);
  }
  
  constructor(element) {
    if (!element) {
      throw new JElementNullError('element');
    }
    if (!(element instanceof Element)) {
      throw new JElementInstantiationError(typeof element);
    }
    super();
    this.element = element;
  }
  
  getElement() {
    return this.element;
  }
  
  click() {
    if (this.result !== true) return this;
    this.element.click();
    return this;
  }
  
  focus() {
    if (this.result !== true) return this;
    this.element.focus();
    return this;
  }
  
  blur() {
    if (this.result !== true) return this;
    this.element.blur();
    return this;
  }
  
  scrollIntoView() {
    if (this.result !== true) return this;
    this.element.scrollIntoView();
    return this;
  }
  
  scrollIntoView() {
    if (this.result !== true) return this;
    this.element.scrollIntoView({ behavior: 'smooth' });
    return this;
  }
  
  getText() {
    return this.element.textContent;
  }
  
  setText(text) {
    if (this.result !== true) return this;
    this.element.textContent = text;
    return this;
  }
  
  getStyle() {
    return this.element.style;
  }
  
  setStyle(property, value) {
    if (this.result !== true) return this;
    this.element.style[property] = value;
    return this;
  }
  
  getValue() {
    return this.element.value;
  }
  
  setValue(value) {
    if (this.result !== true) return this;
    this.element.value = value;
    return this;
  }
  
  replace(currentValue, newValue) {
    if (this.result !== true) return this;
    this.element.value.replace(currentValue, newValue);
    return this;
  }
  
  replaceAll(currentValue, newValue) {
    if (this.result !== true) return this;
    this.element.value.replaceAll(currentValue, newValue);
    return this;
  }
  
  getMax() {
    return this.element.max;
  }
  
  setMax(time) {
    if (this.result !== true) return this;
    this.element.max = time;
    return this;
  }
  
  getMin() {
    return this.element.min;
  }
  
  setMin(time) {
    if (this.result !== true) return this;
    this.element.min = time;
    return this;
  }
  
  getStep() {
    return this.element.step;
  }
  
  setStep(sec) {
    if (this.result !== true) return this;
    this.element.step = sec;
    return this;
  }
  
  getInnerHtml() {
    return this.element.innerHTML;
  }
  
  setInnerHtml(html) {
    if (this.result !== true) return this;
    this.element.innerHTML = html;
    return this;
  }
  
  getOuterHtml() {
    return this.element.outerHTML;
  }
  
  setOuterHtml(html) {
    if (this.result !== true) return this;
    this.element.outerHTML = html;
    return this;
  }
  
  insertBeforebeginHtml(html) {
    if (this.result !== true) return this;
    this.element.insertAdjacentHTML('beforebegin', html);
    return this;
  }
  
  insertAfterbeginHtml(html) {
    if (this.result !== true) return this;
    this.element.insertAdjacentHTML('afterbegin', html);
    return this;
  }
  
  insertBeforeendHtml(html) {
    if (this.result !== true) return this;
    this.element.insertAdjacentHTML('beforeend', html);
    return this;
  }
  
  insertAfterendHtml(html) {
    if (this.result !== true) return this;
    this.element.insertAdjacentHTML('afterend', html);
    return this;
  }
  
  removeChild(child) {
    if (this.result !== true) return this;
    this.element.removeChild(child);
    return this;
  }
  
  replaceChild(newChild, oldChild) {
    if (this.result !== true) return this;
    this.element.replaceChild(newChild, oldChild);
    return this;
  }
  
  appendChild(child) {
    if (this.result !== true) return this;
    if (child instanceof JElement) {
      let element = child.getElement();
      this.element.appendChild(element);
    } else {
      this.element.appendChild(child);
    }
    return this;
  }
  
  getDisabled() {
    return this.element.disabled;
  }
  
  setDisabled(_bool = true) {
    if (this.result !== true) return this;
    this.element.disabled = _bool;
    return this;
  }
  
  getReadonly() {
    return this.element.readOnly;
  }
  
  setReadonly(_bool = true) {
    if (this.result !== true) return this;
    this.element.readOnly = _bool;
    return this;
  }
  
  addDisplayNone() {
    if (this.result !== true) return this;
    this.element.style.display = 'none';
    return this;
  }
  
  removeDisplayNone() {
    if (this.result !== true) return this;
    this.element.style.display = '';
    return this;
  }
  
  getClassList() {
    return this.element.classList;
  }
  
  containsClass(className) {
    return this.element.classList.contains(className);
  }
  
  addClass(className) {
    if (this.result !== true) return this;
    this.element.classList.add(className);
    return this;
  }
  
  removeClass(className) {
    if (this.result !== true) return this;
    this.element.classList.remove(className);
    return this;
  }
  
  addEvent(event, fn) {
    if (this.result !== true) return this;
    this.element.addEventListener(event, fn);
    return this;
  }
  
  addKeyupEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('keyup', fn);
    return this;
  }
  
  addKeypressEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('keypress', fn);
    return this;
  }
  
  addKeydownEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('keydown', fn);
    return this;
  }
  
  addClickEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('click', fn);
    return this;
  }
  
  addDblclickEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('dblclick', fn);
    return this;
  }
  
  addDragEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('drag', fn);
    return this;
  }
  
  addDragstartEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('dragstart', fn);
    return this;
  }
  
  addDragendEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('dragend', fn);
    return this;
  }
  
  addDragenterEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('dragenter', fn);
    return this;
  }
  
  addDragleaveEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('dragleave', fn);
    return this;
  }
  
  addDragoverEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('dragover', fn);
    return this;
  }
  
  addTouchstartEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('touchstart', fn);
    return this;
  }
  
  addTouchmoveEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('touchmove', fn);
    return this;
  }
  
  addTouchendEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('touchend', fn);
    return this;
  }
  
  addTouchcancelEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('touchcancel', fn);
    return this;
  }
  
  addInputEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('input', fn);
    return this;
  }
  
  addChangeEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('change', fn);
    return this;
  }
  
  addFocusEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('focus', fn);
    return this;
  }
  
  addBlurEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('blur', fn);
    return this;
  }
  
  addFocusinEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('focusin', fn);
    return this;
  }
  
  addFocusoutEvent(fn) {
    if (this.result !== true) return this;
    this.element.addEventListener('focusout', fn);
    return this;
  }
  
  dispatchInputEvent() {
    if (this.result !== true) return this;
    let inputEvent = new Event('input', {
      bubbles: true,
      cancelable: true,
    });
    this.element.dispatchEvent(inputEvent);
    return this;
  }
  
  dispatchChangeEvent() {
    if (this.result !== true) return this;
    let inputEvent = new Event('change', {
      bubbles: true,
      cancelable: true,
    });
    this.element.dispatchEvent(inputEvent);
    return this;
  }
}

class JForm extends JElement {
  tagName = 'FORM';
  
  setAction(url) {
    if (this.result !== true) return this;
    this.element.action = url;
    return this;
  }
  
  setMethod(method) {
    if (this.result !== true) return this;
    this.element.method = method;
    return this;
  }
  
  setGet() {
    if (this.result !== true) return this;
    this.element.method = 'GET';
    return this;
  }
  
  setPost() {
    if (this.result !== true) return this;
    this.element.method = 'POST';
    return this;
  }
  
  setContentType(contentType) {
    if (this.result !== true) return this;
    this.element.enctype = contentType;
    return this;
  }
  
  setMultipart() {
    if (this.result !== true) return this;
    this.element.enctype = 'multipart/form-data';
    return this;
  }
  
  setTarget(target) {
    if (this.result !== true) return this;
    this.element.target = target;
    return this;
  }
  
  getElement(name, index) {
    return JElement.select(this.element, name, index);
  }
  
  getInput(name, index) {
    return JInput.select(this.element, name, index);
  }
  
  getInputs(name) {
    return JInputs.select(this.element, name);
  }
  
  getSelect(name, index) {
    return JSelect.select(this.element, name, index);
  }
  
  getFile(name, index) {
    return JFile.select(this.element, name, index);
  }
  
  getRadio(name, index) {
    return JRadio.select(this.element, name, index);
  }
  
  getRadios(name) {
    return JRadios.select(this.element, name);
  }
  
  getCheckbox(name, index) {
    return JCheckbox.select(this.element, name, index);
  }
  
  getCheckboxes(name) {
    return JCheckboxes.select(this.element, name);
  }
  
  remove(name, index = 0) {
    if (this.result !== true) return this;
    let childElement = this.element.elements[name];
    if (childElement && childElement.length > index) {
      if (childElement[index]) {
        childElement[index].remove();
      }
    } else if (childElement) {
      childElement.remove();
    }
    return this;
  }
  
  reset() {
    this.element.reset();
  }
  
  toObject() {
    const disabled_inputs = this.element.querySelectorAll('[disabled]');
    disabled_inputs.forEach((input) => {
      input.removeAttribute('disabled');
    });
    const formData = new FormData(this.element);
    let obj = {};
    
    for (const [key, value] of formData.entries()) {
      if (obj[key] !== undefined) {
        if (!Array.isArray(obj[key])) {
          obj[key] = [obj[key]];
        }
        obj[key].push(value);
      } else {
        obj[key] = value;
      }
    }
    disabled_inputs.forEach((input) => {
      input.setAttribute('disabled', '');
    });
    return obj;
  }
  
  submit(url) {
    if (this.result !== true) return this;
    if (url != null) {
      this.element.action = url;
    }
    this.element.submit();
    return this;
  }
  
  async fetch(url) {
    if (url == null) {
      url = this.element.action;
    }
    return fetch(url, {
      method: 'POST',
      body: new FormData(this.element),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      const contentType = response.headers.get('Content-Type');
      
      if (contentType.includes('application/json')) {
        return response.json();
      } else if (contentType.includes('text')) {
        return response.text();
      } else if (contentType.includes('form-data')) {
        return response.formData();
      } else if (
      contentType.includes('image') ||
      contentType.includes('video') ||
      contentType.includes('audio')
      ) {
        return response.blob();
      } else {
        return response.arrayBuffer();
      }
    })
    .catch(() => {
      throw new JFormFetchError(url);
    });
  }
}

class JButton extends JElement {
  tagName = 'BUTTON';
}

class JTextarea extends JElement {
  tagName = 'TEXTAREA';
}

class JSelect extends JElement {
  tagName = 'SELECT';
  
  selectedValue() {
    return this.element.options[this.element.selectedIndex].value;
  }
  
  selectedText() {
    return this.element.options[this.element.selectedIndex].text;
  }
  
  selectByValue(value) {
    if (this.result !== true) return this;
    let options = this.element.options;
    for (i = 0; i < options.length; i++) {
      let option = options[i];
      if (option.value == value) {
        option.selected = true;
        this.dispatchChangeEvent();
        break;
      }
    }
    return this;
  }
  
  selectByText(text) {
    if (this.result !== true) return this;
    let options = this.element.options;
    for (i = 0; i < options.length; i++) {
      let option = options[i];
      if (option.text == text) {
        option.selected = true;
        this.dispatchChangeEvent();
        break;
      }
    }
    return this;
  }
  
  selectByIndex(index) {
    if (this.result !== true) return this;
    let options = this.element.options;
    if (options && options.length > index) {
      options[i].selected = true;
      this.dispatchChangeEvent();
    }
    return this;
  }
  
  addOption(text, value) {
    if (this.result !== true) return this;
    var option = new Option(text, value);
    this.element.add(option);
    return this;
  }
  
  removeAllOptions() {
    if (this.result !== true) return this;
    while (this.element.options.length > 0) {
      this.element.remove(0);
    }
    return this;
  }
  
  removeOptionByValue(value) {
    if (this.result !== true) return this;
    let options = this.element.options;
    for (i = 0; i < options.length; i++) {
      if (options[i].value == value) {
        this.element.remove(i);
      }
    }
    return this;
  }
  
  removeOptionByText(text) {
    if (this.result !== true) return this;
    let options = this.element.options;
    for (i = 0; i < options.length; i++) {
      if (options[i].text == text) {
        this.element.remove(i);
      }
    }
    return this;
  }
  
  removeOptionByIndex(index) {
    if (this.result !== true) return this;
    this.element.remove(index);
    return this;
  }
}

class JProgress extends JElement {
  tagName = 'PROGRESS';
}

class JDatalist extends JElement {
  tagName = 'DATALIST';
  
  addOption(value, text) {
    if (this.result !== true) return this;
    var option = new Option(text, value);
    this.element.add(option);
    return this;
  }
  
  removeAllOptions() {
    if (this.result !== true) return this;
    while (this.element.options.length > 0) {
      this.element.remove(0);
    }
    return this;
  }
  
  removeOptionByValue(value) {
    if (this.result !== true) return this;
    let options = this.element.options;
    for (i = 0; i < options.length; i++) {
      if (options[i].value == value) {
        this.element.remove(i);
      }
    }
    return this;
  }
  
  removeOptionByText(text) {
    if (this.result !== true) return this;
    let options = this.element.options;
    for (i = 0; i < options.length; i++) {
      if (options[i].text == text) {
        this.element.remove(i);
      }
    }
    return this;
  }
  
  removeOptionByIndex(index) {
    if (this.result !== true) return this;
    this.element.remove(index);
    return this;
  }
}

class JInput extends JElement {
  tagName = 'INPUT';
  
  static pattern = {
    number: "^[0-9]+$",
    english: "[^a-zA-Z]+$",
    lowercase: "^[a-z]+$",
    uppercase: "^[A-Z]+$",
    korean: "^[ㄱ-ㅎㅏ-ㅣ가-힣]+$",
    japanese:
    "^[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\u4E00-\u9FAF\u3400-\u4DBF\u31F0-\u31FF]+$",
    hiragana: "^[\u3040-\u309F]+$",
    katakana: "^[\u30A0-\u30FF]+$",
    kanji: "^[\u4E00-\u9FAF]+$",
    chinese: "^[\u4E00-\u9FFF]+$",
    includesSpace: "(?=.*[\s]+).*",
    includesSpchar: "(?=.*[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/? \s]+).*",
    id: "^[a-zA-Z0-9-_.]+$",
    password:
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/])[A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]{8,}$",
    strongPassword:
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/].*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/])[A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]{12,}$",
    email:
    "^[a-zA-Z0-9]+[a-zA-Z0-9.+]*[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+[a-zA-Z0-9.]*[a-zA-Z0-9]+$",
    url: "^([a-z][a-z0-9+\-.]*):\/\/([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$",
    phoneNumber: "^(?:\+?\d{1,3}-?)?(?:0\d{1,2}|\d{1,3})(?:-\d{1,4}){0,2}$",
    postalCode: "^[a-zA-Z0-9\s-]+$",
  };
  
  static inputCheckPattern = {
    number: /\D/g,
    english: /[^a-zA-Z]/g,
    lowercase: /[^a-z]/g,
    uppercase: /[^A-Z]/g,
    korean: /[^ㄱ-ㅎㅏ-ㅣ가-힣]/g,
    japanese:
    /[^\uFF21-\uFF3A\uFF41-\uFF5A\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\u4E00-\u9FAF\u3400-\u4DBF]/g,
    hiragana: /[^\uFF21-\uFF3A\uFF41-\uFF5A\u3040-\u309F]/g,
    katakana: /[^\uFF21-\uFF3A\uFF41-\uFF5A\u30A0-\u30FF\u31F0-\u31FF]/g,
    kanji: /[^\uFF21-\uFF3A\uFF41-\uFF5A\u4E00-\u9FAF\u3400-\u4DBF]/g,
    chinese: /[^\uFF21-\uFF3A\uFF41-\uFF5A\u4E00-\u9FFF]/g,
    notSpace: /[\s]+/g,
    notSpchar: /[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]+/g,
    id: /[^a-zA-Z0-9-_.]/g,
    email: /[^a-zA-Z0-9-.@+]/g,
    url: /[^a-zA-Z0-9-._~]/g,
    phoneNumber: /[^\d+-]/g,
    postalCode: /[^a-zA-Z0-9\s\-]/g,
  };
  
  focusoutReportEvent = () => {
    return () => {
      this.report();
    };
  };
  
  inputCheckEvent = (pattern, fn) => {
    return () => {
      if (pattern.test(this.element.value)) {
        this.element.value = this.element.value.replace(pattern, '');
        if (typeof fn === 'function') {
          fn(this);
        }
      }
    };
  };
  
  isEmpty() {
    this.result = this.element.value == null || this.element.value.trim() == '';
    return this;
  }
  
  isNotEmpty() {
    this.isEmpty();
    this.result = !this.result;
    return this;
  }
  
  isEqual(value) {
    this.result = this.element.value === value;
    return this;
  }
  
  isNotEqual(value) {
    this.isEqual(value);
    this.result = !this.result;
    return this;
  }
  
  isIncludes(value) {
    this.result = this.element.value.includes(value);
    return this;
  }
  
  isNotIncludes(value) {
    this.isIncludes(value);
    this.result = !this.result;
    return this;
  }
  
  isGreaterValue(number) {
    this.result = this.element.value > number;
    return this;
  }
  
  isLessValue(number) {
    this.result = this.element.value < number;
    return this;
  }
  
  isGreaterLength(number) {
    this.result = this.element.value.length > number;
    return this;
  }
  
  isLessLength(number) {
    this.result = this.element.value.length < number;
    return this;
  }
  
  isValueBetween(start, end) {
    this.result = this.element.value >= start && this.element.value <= end;
    return this;
  }
  
  isNotValueBetween(start, end) {
    this.isValueBetween(start, end);
    this.result = !this.result;
    return this;
  }
  
  isLengthBetween(start, end) {
    this.result =
    this.element.value.length >= start && this.element.value.length <= end;
    return this;
  }
  
  isNotLengthBetween(start, end) {
    this.isLengthBetween(start, end);
    this.result = !this.result;
    return this;
  }
  
  isNumber() {
    this.result = !isNaN(this.element.value);
    return this;
  }
  
  isNotNumber() {
    this.isNumber();
    this.result = !this.result;
    return this;
  }
  
  isOnlyEnglish() {
    this.result = JInput.pattern.english.test(this.element.value);
    return this;
  }
  
  isNotOnlyEnglish() {
    this.isOnlyEnglish();
    this.result = !this.result;
    return this;
  }
  
  isLowercase() {
    this.result = JInput.pattern.lowercase.test(this.element.value);
    return this;
  }
  
  isNotLowercase() {
    this.isLowercase();
    this.result = !this.result;
    return this;
  }
  
  isUppercase() {
    this.result = JInput.pattern.uppercase.test(this.element.value);
    return this;
  }
  
  isNotUppercase() {
    this.isUppercase();
    this.result = !this.result;
    return this;
  }
  
  isOnlyKorean() {
    this.result = JInput.pattern.korean.test(this.element.value);
    return this;
  }
  
  isNotOnlyKorean() {
    this.isOnlyKorean();
    this.result = !this.result;
    return this;
  }
  
  isOnlyJapanese() {
    this.result = JInput.pattern.japanese.test(this.element.value);
    return this;
  }
  
  isNotOnlyJapanese() {
    this.isOnlyJapanese();
    this.result = !this.result;
    return this;
  }
  
  isOnlyHiragana() {
    this.result = JInput.pattern.hiragana.test(this.element.value);
    return this;
  }
  
  isNotOnlyHiragana() {
    this.isOnlyHiragana();
    this.result = !this.result;
    return this;
  }
  
  isOnlyKatakana() {
    this.result = JInput.pattern.katakana.test(this.element.value);
    return this;
  }
  
  isNotOnlyKatakana() {
    this.isOnlyKatakana();
    this.result = !this.result;
    return this;
  }
  
  isOnlyKanji() {
    this.result = JInput.pattern.kanji.test(this.element.value);
    return this;
  }
  
  isNotOnlyKanji() {
    this.isOnlyKanji();
    this.result = !this.result;
    return this;
  }
  
  isOnlyChanese() {
    this.result = JInput.pattern.chinese.test(this.element.value);
    return this;
  }
  
  isNotOnlyChanese() {
    this.isOnlyChanese();
    this.result = !this.result;
    return this;
  }
  
  isIncludesSpace() {
    this.result = JInput.pattern.includesSpace.test(this.element.value);
    return this;
  }
  
  isNotIncludesSpace() {
    this.isIncludesSpace();
    this.result = !this.result;
    return this;
  }
  
  isIncludesSpchar() {
    this.result = JInput.pattern.includesSpchar.test(this.element.value);
    return this;
  }
  
  isNotIncludesSpchar() {
    this.isIncludesSpchar();
    this.result = !this.result;
    return this;
  }
  
  isId() {
    this.result = JInput.pattern.id.test(this.element.value);
    return this;
  }
  
  isNotId() {
    this.isId();
    this.result = !this.result;
    return this;
  }
  
  isPassword() {
    this.result = JInput.pattern.password.test(this.element.value);
    return this;
  }
  
  isNotPassword() {
    this.isPassword();
    this.result = !this.result;
    return this;
  }
  
  isStrongPassword() {
    this.result = JInput.pattern.strongPassword.test(this.element.value);
    return this;
  }
  
  isNotStrongPassword() {
    this.isStrongPassword();
    this.result = !this.result;
    return this;
  }
  
  isEmail() {
    this.result = JInput.pattern.email.test(this.element.value);
    return this;
  }
  
  isNotEmail() {
    this.isEmail();
    this.result = !this.result;
    return this;
  }
  
  isUrl() {
    this.result = JInput.pattern.url.test(this.element.value);
    return this;
  }
  
  isNotUrl() {
    this.isUrl();
    this.result = !this.result;
    return this;
  }
  
  isPhoneNumber() {
    this.result = JInput.pattern.phoneNumber.test(this.element.value);
    return this;
  }
  
  isNotPhoneNumber() {
    this.isPhoneNumber();
    this.result = !this.result;
    return this;
  }
  
  isPostalCode() {
    this.result = JInput.pattern.postalCode.test(this.element.value);
    return this;
  }
  
  isNotPostalCode() {
    this.isPostalCode();
    this.result = !this.result;
    return this;
  }
  
  test(pattern) {
    if (this.result !== true) return this;
    this.result = pattern.test(this.element.value);
    return this;
  }
  
  setRequired(bool = true) {
    if (this.result !== true) return this;
    this.element.required = bool;
    return this;
  }
  
  setReportMessage(message = '') {
    if (this.result !== true) return this;
    this.element.setCustomValidity(message);
    return this;
  }
  
  reportValidity() {
    if (this.result !== true) return this;
    this.result = this.element.reportValidity();
    return this;
  }
  
  checkValidity() {
    if (this.result !== true) return this;
    this.result = this.element.checkValidity();
    return this;
  }
  
  setPattern(pattern) {
    if (this.result !== true) return this;
    this.element.pattern = pattern;
    return this;
  }
  
  setNumberCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.number;
    return this;
  }
  
  setEnglishCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.english;
    return this;
  }
  
  setLowercaseCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.lowercase;
    return this;
  }
  
  setUppercaseCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.uppercase;
    return this;
  }
  
  setKoreanCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.korean;
    return this;
  }
  
  setJapaneseCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.japanese;
    return this;
  }
  
  setHiraganaCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.hiragana;
    return this;
  }
  
  setKatakanaCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.katakana;
    return this;
  }
  
  setKanjiCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.kanji;
    return this;
  }
  
  setChineseCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.chinese;
    return this;
  }
  
  setIncludesSpaceCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.includesSpace;
    return this;
  }
  
  setIncludesSpcharCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.includesSpchar;
    return this;
  }
  
  setIdCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.id;
    return this;
  }
  
  setPasswordCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.password;
    return this;
  }
  
  setStrongPasswordCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.strongPassword;
    return this;
  }
  
  setEmailCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.email;
    return this;
  }
  
  setUrlCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.url;
    return this;
  }
  
  setPhoneNumberCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.phoneNumber;
    return this;
  }
  
  setPostalCodeCheckPattern() {
    if (this.result !== true) return this;
    this.element.pattern = JInput.pattern.postalCode;
    return this;
  }
  
  allowNumberOnly(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.number, fn);
    return this;
  }
  
  allowEnglishOnly(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.english, fn);
    return this;
  }
  
  allowLowercaseOnly(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.lowercase, fn);
    return this;
  }
  
  allowKoreanOnly(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.korean, fn);
    return this;
  }
  
  allowJapaneseOnly(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.japanese, fn);
    return this;
  }
  
  allowHiraganaOnly(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.hiragana, fn);
    return this;
  }
  
  allowKatakanaOnly(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.katakana, fn);
    return this;
  }
  
  allowKanjiOnly(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.kanji, fn);
    return this;
  }
  
  allowChineseOnly(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.chinese, fn);
    return this;
  }
  
  disallowSpace(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.notSpace, fn);
    return this;
  }
  
  disallowSpchar(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.notSpchar, fn);
    return this;
  }
  
  allowIdPattern(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.id, fn);
    return this;
  }
  
  allowEmailPattern(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.email, fn);
    return this;
  }
  
  allowUrlPattern(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.url, fn);
    return this;
  }
  
  allowPhoneNumberPattern(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.phoneNumber, fn);
    return this;
  }
  
  allowPostalCodePattern(fn) {
    if (this.result !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.postalCode, fn);
    return this;
  }
  
  addFocusoutReportEvent() {
    if (this.result !== true) return this;
    this.addFocusoutEvent(this.focusoutReportEvent());
    return this;
  }
  
  addInputCheckEvent(pattern, fn) {
    if (this.result !== true) return this;
    this.addInputEvent(this.inputCheckEvent(pattern, fn));
    return this;
  }
  
  removeFocusoutReportEvent() {
    if (this.result !== true) return this;
    this.removeFocusoutEvent(this.focusoutReportEvent());
    return this;
  }
  
  removeInputCheckEvent(pattern, fn) {
    if (this.result !== true) return this;
    this.removeInputEvent(this.inputCheckEvent(pattern, fn));
    return this;
  }
}

class JHidden extends JInput {
  type = 'hidden';
}

class JText extends JInput {
  type = 'text';
}

class JNumber extends JInput {
  type = 'number';
}

class JDate extends JInput {
  type = 'date';
  
  getDay() {
    return JAction.stringToDate(this.element.value).getUTCDay();
  }
  
  setToday() {
    if (this.result !== true) return this;
    this.element.value = JAction.today();
    return this;
  }
  
  isMonthsAgo(months) {
    const selectedDate = new Date(this.element.value);
    const currentDate = new Date();
    const referenceDate = new Date(currentDate);
    referenceDate.setMonth(currentDate.getMonth() - months);
    referenceDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    
    this.result = referenceDate >= selectedDate;
    return this;
  }
  
  isMonthsLater(months) {
    const selectedDate = new Date(this.element.value);
    const currentDate = new Date();
    const referenceDate = new Date(currentDate);
    referenceDate.setMonth(currentDate.getMonth() + months);
    referenceDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    
    this.result = referenceDate <= selectedDate;
    return this;
  }
  
  isDaysAgo(days) {
    const selectedDate = new Date(this.element.value);
    const currentDate = new Date();
    const referenceDate = new Date(currentDate);
    referenceDate.setDate(currentDate.getDate() - days);
    referenceDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    
    this.result = referenceDate >= selectedDate;
    return this;
  }
  
  isDaysLater(days) {
    const selectedDate = new Date(this.element.value);
    const currentDate = new Date();
    const referenceDate = new Date(currentDate);
    referenceDate.setDate(currentDate.getDate() + days);
    referenceDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    
    this.result = referenceDate <= selectedDate;
    return this;
  }
  
  isDateAgo(targetDate) {
    const selectedDate = new Date(this.element.value);
    targetDate = JAction.stringToDate(targetDate);
    targetDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    
    this.result = targetDate >= selectedDate;
    return this;
  }
  
  isDateLater(targetDate) {
    const selectedDate = new Date(this.element.value);
    JAction.stringToDate(targetDate);
    targetDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    
    this.result = targetDate <= selectedDate;
    return this;
  }
  
  disableMonthsAgo(months, targetDate = JAction.today()) {
    if (this.result !== true) return this;
    targetDate = JAction.stringToDate(targetDate);
    let minDate = new Date(targetDate);
    minDate.setMonth(targetDate.getMonth() - months);
    
    this.element.setAttribute('min', JAction.dateToString(minDate));
    return this;
  }
  
  disableMonthsLater(months, targetDate = JAction.today()) {
    if (this.result !== true) return this;
    targetDate = JAction.stringToDate(targetDate);
    let maxDate = new Date(targetDate);
    maxDate.setMonth(targetDate.getMonth() + months);
    
    this.element.setAttribute('max', JAction.dateToString(maxDate));
    return this;
  }
  
  disableDaysAgo(days, targetDate = JAction.today()) {
    if (this.result !== true) return this;
    targetDate = JAction.stringToDate(targetDate);
    let minDate = new Date(targetDate);
    minDate.setDate(targetDate.getDate() - days);
    
    this.element.setAttribute('min', JAction.dateToString(minDate));
    return this;
  }
  
  disableDaysLater(days, targetDate = JAction.today()) {
    if (this.result !== true) return this;
    targetDate = JAction.stringToDate(targetDate);
    let maxDate = new Date(targetDate);
    maxDate.setDate(targetDate.getDate() + days);
    
    this.element.setAttribute('max', JAction.dateToString(maxDate));
    return this;
  }
  
  addDays(days) {
    if (this.result !== true) return this;
    let targetDate = JAction.stringToDate(this.element.value);
    targetDate.setDate(targetDate.getDate() + days);
    
    this.element.value = JAction.dateToString(targetDate);
    return this;
  }
  
  subDays(days) {
    if (this.result !== true) return this;
    let targetDate = JAction.stringToDate(this.element.value);
    targetDate.setDate(targetDate.getDate() - days);
    
    this.element.value = JAction.dateToString(targetDate);
    return this;
  }
  
  addMonths(months) {
    if (this.result !== true) return this;
    let targetDate = JAction.stringToDate(this.element.value);
    targetDate.setMonth(targetDate.getMonth() + months);
    
    this.element.value = JAction.dateToString(targetDate);
    return this;
  }
  
  subMonths(months) {
    if (this.result !== true) return this;
    let targetDate = JAction.stringToDate(this.element.value);
    targetDate.setMonth(targetDate.getMonth() - months);
    
    this.element.value = JAction.dateToString(targetDate);
    return this;
  }
}

class JTime extends JInput {
  type = 'time';
  
  setNow() {
    if (this.result !== true) return this;
    this.element.value = JAction.now();
    return this;
  }
  
  isHoursAgo(hours) {
    const standardDate = new Date(Date.parse('2000-01-01'));
    
    const inputTime = new Date(standardDate);
    let [selectedHours, selectedMinutes] = this.element.value.split(':');
    inputTime.setHours(selectedHours, selectedMinutes, 0, 0);
    
    const referenceTime = new Date();
    referenceTime.setFullYear(standardDate.getFullYear());
    referenceTime.setMonth(standardDate.getMonth());
    referenceTime.setDate(standardDate.getDate());
    referenceTime.setHours(
    referenceTime.getHours() - hours,
    referenceTime.getMinutes(),
    0,
    0,
    );
    
    this.result = referenceTime >= inputTime;
    return this;
  }
  
  isHoursLater(hours) {
    const standardDate = new Date(Date.parse('2000-01-01'));
    
    const inputTime = new Date(standardDate);
    let [selectedHours, selectedMinutes] = this.element.value.split(':');
    inputTime.setHours(selectedHours, selectedMinutes, 0, 0);
    
    const referenceTime = new Date();
    referenceTime.setFullYear(standardDate.getFullYear());
    referenceTime.setMonth(standardDate.getMonth());
    referenceTime.setDate(standardDate.getDate());
    referenceTime.setHours(
    referenceTime.getHours() + hours,
    referenceTime.getMinutes(),
    0,
    0,
    );
    
    this.result = referenceTime <= inputTime;
    return this;
  }
  
  isMinutesAgo(minutes) {
    const standardDate = new Date(Date.parse('2000-01-01'));
    
    const inputTime = new Date(standardDate);
    let [selectedHours, selectedMinutes] = this.element.value.split(':');
    inputTime.setHours(selectedHours, selectedMinutes, 0, 0);
    
    const referenceTime = new Date();
    referenceTime.setFullYear(standardDate.getFullYear());
    referenceTime.setMonth(standardDate.getMonth());
    referenceTime.setDate(standardDate.getDate());
    referenceTime.setHours(
    referenceTime.getHours(),
    referenceTime.getMinutes() - minutes,
    0,
    0,
    );
    
    this.result = referenceTime >= inputTime;
    return this;
  }
  
  isMinutesLater(minutes) {
    const standardDate = new Date(Date.parse('2000-01-01'));
    
    const inputTime = new Date(standardDate);
    let [selectedHours, selectedMinutes] = this.element.value.split(':');
    inputTime.setHours(selectedHours, selectedMinutes, 0, 0);
    
    const referenceTime = new Date();
    referenceTime.setFullYear(standardDate.getFullYear());
    referenceTime.setMonth(standardDate.getMonth());
    referenceTime.setDate(standardDate.getDate());
    referenceTime.setHours(
    referenceTime.getHours(),
    referenceTime.getMinutes() + minutes,
    0,
    0,
    );
    
    this.result = referenceTime <= inputTime;
    return this;
  }
  
  isTimeAgo(time) {
    const standardDate = new Date(Date.parse('2000-01-01'));
    
    const inputTime = new Date(standardDate);
    let [selectedHours, selectedMinutes] = this.element.value.split(':');
    inputTime.setHours(selectedHours, selectedMinutes, 0, 0);
    
    const referenceTime = new Date(standardDate);
    let [hours, minutes] = time.split(':');
    referenceTime.setHours(hours, minutes, 0, 0);
    
    this.result = referenceTime >= inputTime;
    return this;
  }
  
  isTimeLater(time) {
    const standardDate = new Date(Date.parse('2000-01-01'));
    
    const inputTime = new Date(standardDate);
    let [selectedHours, selectedMinutes] = this.element.value.split(':');
    inputTime.setHours(selectedHours, selectedMinutes, 0, 0);
    
    const referenceTime = new Date(standardDate);
    let [hours, minutes] = time.split(':');
    referenceTime.setHours(hours, minutes, 0, 0);
    
    this.result = referenceTime <= inputTime;
    return this;
  }
  
  addHours(hours) {
    if (this.result !== true) return this;
    const standardDate = new Date(Date.parse('2000-01-01'));
    
    const inputTime = new Date(standardDate);
    let [selectedHours, selectedMinutes] = this.element.value.split(':');
    inputTime.setHours(selectedHours + hours, selectedMinutes, 0, 0);
    
    this.element.value = `${inputTime.getHours()}:${inputTime.getMinutes()}`;
    return this;
  }
  
  subHours(hours) {
    if (this.result !== true) return this;
    const standardDate = new Date(Date.parse('2000-01-01'));
    
    const inputTime = new Date(standardDate);
    let [selectedHours, selectedMinutes] = this.element.value.split(':');
    inputTime.setHours(selectedHours - hours, selectedMinutes, 0, 0);
    
    this.element.value = `${inputTime.getHours()}:${inputTime.getMinutes()}`;
    return this;
  }
  
  addMinutes(minutes) {
    if (this.result !== true) return this;
    const standardDate = new Date(Date.parse('2000-01-01'));
    
    const inputTime = new Date(standardDate);
    let [selectedHours, selectedMinutes] = this.element.value.split(':');
    inputTime.setHours(selectedHours, selectedMinutes + minutes, 0, 0);
    
    this.element.value = `${inputTime.getHours()}:${inputTime.getMinutes()}`;
    return this;
  }
  
  subMinutes(minutes) {
    if (this.result !== true) return this;
    const standardDate = new Date(Date.parse('2000-01-01'));
    
    const inputTime = new Date(standardDate);
    let [selectedHours, selectedMinutes] = this.element.value.split(':');
    inputTime.setHours(selectedHours, selectedMinutes - minutes, 0, 0);
    
    this.element.value = `${inputTime.getHours()}:${inputTime.getMinutes()}`;
    return this;
  }
}

class JEmail extends JInput {
  type = 'email';
}

class JFile extends JInput {
  type = 'file';
  
  isGreaterFilesCount(number) {
    this.result = this.element.files.length > number;
    return this;
  }
  
  isLessFilesCount(number) {
    this.result = this.element.files.length < number;
    return this;
  }
  
  isFilesCountBetween(start, end) {
    this.result = this.element.files.length >= start && this.element.files.length <= end;
    return this;
  }
  
  isNotFilesCountBetween(start, end) {
    this.isCountBetween(start, end);
    this.result = !this.result;
    return this;
  }
}

class JColor extends JInput {
  type = 'color';
}

class JRange extends JInput {
  type = 'range';
}

class JRadio extends JInput {
  type = 'radio';
  
  check(bool = true) {
    this.element.checked = bool;
    return this;
  }
  
  isChecked() {
    return this.element.checked;
  }
}

class JCheckbox extends JInput {
  type = 'checkbox';
  
  check(bool = true) {
    if (this.result !== true) return this;
    this.element.checked = bool;
    return this;
  }
  
  isChecked() {
    return this.element.checked;
  }
}

class JInputButton extends JInput {
  type = 'button';
}

class JSearch extends JInput {
  type = 'search';
  
  setList(listId) {
    if (this.result !== true) return this;
    this.element.list = listId;
    return this;
  }
  
  getList() {
    return this.element.list;
  }
}

class JElements extends JObject {
  elements;
  
  passOption = 0;
  
  static from(arg1, arg2) {
    if (arg1 && arg2) {
      return this.select(arg1, arg2);
    } else {
      return this.get(arg1);
    }
  }
  
  static get(name) {
    let elements = document.getElementsByName(name);
    if (elements.length == 0) {
      throw new JElementsNameError(null, name);
    }
    let element = elements[0];
    if (this.tagName) {
      if (element.tagName !== this.tagName) {
        throw new JElementsTagNameError(null, name);
      }
    }
    if (this.type) {
      if (element.type !== this.type) {
        throw new JElementsTypeError(null, name);
      }
    }
    return new this(elements);
  }
  
  static select(parentId, name) {
    let parentElement = document.getElementById(parentId);
    if (!parentElement) {
      throw new JElementIdError(parentId);
    }
    let elements = Array.from(
    parentElement.querySelectorAll(`[name="${name}"]`),
    );
    if (!elements) {
      throw new JElementsNameError(parentId, name);
    }
    let element = elements[0];
    if (this.tagName) {
      if (element.tagName !== this.tagName) {
        throw new JElementsTagNameError(parentId, name);
      }
    }
    if (this.type) {
      if (element.type !== this.type) {
        throw new JElementsTypeError(parentId, name);
      }
    }
    return new this(elements);
  }
  
  constructor(elements) {
    if (!elements) {
      throw new JElementNullError('elements');
    }
    super();
    this.elements = elements;
  }
  
  getElements() {
    return this.elements;
  }
  
  setPassOption(number) {
    this.passOption = number;
    return this;
  }
  
  foreach(fn) {
    if (typeof fn === 'function') {
      let trueCount = this.elements.length;
      for (let element of this.elements) {
        let result = fn(element);
        if (result === false) {
          trueCount--;
        }
      }
      if (this.passOption <= 0) {
        if (trueCount == this.elements.length) {
          this.result = true;
        } else {
          this.result = false;
        }
      } else {
        if (this.passOption <= trueCount) {
          this.result = true;
        } else {
          this.result = false;
        }
      }
    }
    return this;
  }
  
  setText(text) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).setText(text).getResult();
    });
    return this;
  }
  
  setValue(value) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).setValue(value).getResult();
    });
    return this;
  }
  
  replace(value) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).replace(value).getResult();
    });
    return this;
  }
  
  replaceAll(value) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).replaceAll(value).getResult();
    });
    return this;
  }
  
  setMax(value) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).setMax(value).getResult();
    });
    return this;
  }
  
  setMin(value) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).setMin(value).getResult();
    });
    return this;
  }
  
  setStep(value) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).setStep(value).getResult();
    });
    return this;
  }
  
  function(data) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).function(data).getResult();
    });
    return this;
  }
  
  setInnerHtml(html) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).setInnerHtml(html).getResult();
    });
    return this;
  }
  
  setOuterHtml(html) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).setOuterHtml(html).getResult();
    });
    return this;
  }
  
  insertBeforebeginHtml(html) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).insertBeforebeginHtml(html).getResult();
    });
    return this;
  }
  
  insertAfterbeginHtml(html) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).insertAfterbeginHtml(html).getResult();
    });
    return this;
  }
  
  insertAfterendHtml(html) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).insertAfterendHtml(html).getResult();
    });
    return this;
  }
  
  removeChild(child) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).removeChild(child).getResult();
    });
    return this;
  }
  
  replaceChild(newChild, oldChild) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).replaceChild(newChild, oldChild).getResult();
    });
    return this;
  }
  
  appendChild(child) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).appendChild(child).getResult();
    });
    return this;
  }
  
  setDisabled(_bool) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).setDisabled(_bool).getResult();
    });
    return this;
  }
  
  setReadonly(_bool) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).setReadonly(_bool).getResult();
    });
    return this;
  }
  
  addDisplayNone() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addDisplayNone().getResult();
    });
    return this;
  }
  
  removeDisplayNone() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).removeDisplayNone().getResult();
    });
    return this;
  }
  
  addClass(className) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addClass(className).getResult();
    });
    return this;
  }
  
  removeClass(className) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).removeClass(className).getResult();
    });
    return this;
  }
  
  addEvent(event, fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addEvent(event, fn).getResult();
    });
    return this;
  }
  
  addKeyupEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addKeyupEvent(fn).getResult();
    });
    return this;
  }
  
  addKeypressEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addKeypressEvent(fn).getResult();
    });
    return this;
  }
  
  addKeydownEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addKeydownEvent(fn).getResult();
    });
    return this;
  }
  
  addClickEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addClickEvent(fn).getResult();
    });
    return this;
  }
  
  addDblclickEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addDblclickEvent(fn).getResult();
    });
    return this;
  }
  
  addDragEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addDragEvent(fn).getResult();
    });
    return this;
  }
  
  addDragstartEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addDragstartEvent(fn).getResult();
    });
    return this;
  }
  
  addDragendEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addDragendEvent(fn).getResult();
    });
    return this;
  }
  
  addDragenterEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addDragenterEvent(fn).getResult();
    });
    return this;
  }
  
  addDragleaveEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addDragleaveEvent(fn).getResult();
    });
    return this;
  }
  
  addDragoverEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addDragoverEvent(fn).getResult();
    });
    return this;
  }
  
  addTouchstartEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addTouchstartEvent(fn).getResult();
    });
    return this;
  }
  
  addTouchmoveEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addTouchmoveEvent(fn).getResult();
    });
    return this;
  }
  
  addTouchendEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addTouchendEvent(fn).getResult();
    });
    return this;
  }
  
  addTouchcancelEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addTouchcancelEvent(fn).getResult();
    });
    return this;
  }
  
  addInputEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addInputEvent(fn).getResult();
    });
    return this;
  }
  
  addChangeEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addChangeEvent(fn).getResult();
    });
    return this;
  }
  
  addFocusEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addFocusEvent(fn).getResult();
    });
    return this;
  }
  
  addFocusinEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addFocusinEvent(fn).getResult();
    });
    return this;
  }
  
  addFocusoutEvent(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addFocusoutEvent(fn).getResult();
    });
    return this;
  }
  
  addFocusoutReportEvent() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addFocusoutReportEvent().getResult();
    });
    return this;
  }
  
  addInputCheckEvent(pattern, fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JElement(element).addInputCheckEvent(pattern, fn).getResult();
    });
    return this;
  }
}

class JInputs extends JElements {
  tagName = 'INPUT';
  
  isEmpty() {
    this.foreach((element) => {
      return new JInput(element).isEmpty().getResult();
    });
    return this;
  }
  
  isNotEmpty() {
    this.foreach((element) => {
      return new JInput(element).isNotEmpty().getResult();
    });
    return this;
  }
  
  isEqual(value) {
    this.foreach((element) => {
      return new JInput(element).isEqual(value).getResult();
    });
    return this;
  }
  
  isNotEqual(value) {
    this.foreach((element) => {
      return new JInput(element).isNotEqual(value).getResult();
    });
    return this;
  }
  
  isIncludes(value) {
    this.foreach((element) => {
      return new JInput(element).isIncludes(value).getResult();
    });
    return this;
  }
  
  isNotIncludes(value) {
    this.foreach((element) => {
      return new JInput(element).isNotIncludes(value).getResult();
    });
    return this;
  }
  
  isGreaterValue(number) {
    this.foreach((element) => {
      return new JInput(element).isGreaterValue(number).getResult();
    });
    return this;
  }
  
  isLessValue(number) {
    this.foreach((element) => {
      return new JInput(element).isLessValue(number).getResult();
    });
    return this;
  }
  
  isGreaterLength(number) {
    this.foreach((element) => {
      return new JInput(element).isGreaterLength(number).getResult();
    });
    return this;
  }
  
  isLessLength(number) {
    this.foreach((element) => {
      return new JInput(element).isLessLength(number).getResult();
    });
    return this;
  }
  
  isValueBetween(start, end) {
    this.foreach((element) => {
      return new JInput(element).isValueBetween(start, end).getResult();
    });
    return this;
  }
  
  isNotValueBetween(start, end) {
    this.foreach((element) => {
      return new JInput(element).isNotValueBetween(start, end).getResult();
    });
    return this;
  }
  
  isLengthBetween(start, end) {
    this.foreach((element) => {
      return new JInput(element).isLengthBetween(start, end).getResult();
    });
    return this;
  }
  
  isNotLengthBetween(start, end) {
    this.foreach((element) => {
      return new JInput(element).isNotLengthBetween(start, end).getResult();
    });
    return this;
  }
  
  isNumber() {
    this.foreach((element) => {
      return new JInput(element).isNumber().getResult();
    });
    return this;
  }
  
  isNotNumber() {
    this.foreach((element) => {
      return new JInput(element).isNotNumber().getResult();
    });
    return this;
  }
  
  isOnlyEnglish() {
    this.foreach((element) => {
      return new JInput(element).isOnlyEnglish().getResult();
    });
    return this;
  }
  
  isNotOnlyEnglish() {
    this.foreach((element) => {
      return new JInput(element).isNotOnlyEnglish().getResult();
    });
    return this;
  }
  
  isLowercase() {
    this.foreach((element) => {
      return new JInput(element).isLowercase().getResult();
    });
    return this;
  }
  
  isNotLowercase() {
    this.foreach((element) => {
      return new JInput(element).isNotLowercase().getResult();
    });
    return this;
  }
  
  isUppercase() {
    this.foreach((element) => {
      return new JInput(element).isUppercase().getResult();
    });
    return this;
  }
  
  isNotUppercase() {
    this.foreach((element) => {
      return new JInput(element).isNotUppercase().getResult();
    });
    return this;
  }
  
  isOnlyKorean() {
    this.foreach((element) => {
      return new JInput(element).isOnlyKorean().getResult();
    });
    return this;
  }
  
  isNotOnlyKorean() {
    this.foreach((element) => {
      return new JInput(element).isNotOnlyKorean().getResult();
    });
    return this;
  }
  
  isOnlyJapanese() {
    this.foreach((element) => {
      return new JInput(element).isOnlyJapanese().getResult();
    });
    return this;
  }
  
  isNotOnlyJapanese() {
    this.foreach((element) => {
      return new JInput(element).isNotOnlyJapanese().getResult();
    });
    return this;
  }
  
  isOnlyHiragana() {
    this.foreach((element) => {
      return new JInput(element).isOnlyHiragana().getResult();
    });
    return this;
  }
  
  isNotOnlyHiragana() {
    this.foreach((element) => {
      return new JInput(element).isNotOnlyHiragana().getResult();
    });
    return this;
  }
  
  isOnlyKatakana() {
    this.foreach((element) => {
      return new JInput(element).isOnlyKatakana().getResult();
    });
    return this;
  }
  
  isOnlyKanji() {
    this.foreach((element) => {
      return new JInput(element).isOnlyKanji().getResult();
    });
    return this;
  }
  
  isNotOnlyKanji() {
    this.foreach((element) => {
      return new JInput(element).isNotOnlyKanji().getResult();
    });
    return this;
  }
  
  isOnlyChanese() {
    this.foreach((element) => {
      return new JInput(element).isOnlyChanese().getResult();
    });
    return this;
  }
  
  isNotOnlyChanese() {
    this.foreach((element) => {
      return new JInput(element).isNotOnlyChanese().getResult();
    });
    return this;
  }
  
  isIncludesSpace() {
    this.foreach((element) => {
      return new JInput(element).isIncludesSpace().getResult();
    });
    return this;
  }
  
  isNotIncludesSpace() {
    this.foreach((element) => {
      return new JInput(element).isNotIncludesSpace().getResult();
    });
    return this;
  }
  
  isIncludesSpchar() {
    this.foreach((element) => {
      return new JInput(element).isIncludesSpchar().getResult();
    });
    return this;
  }
  
  isNotIncludesSpchar() {
    this.foreach((element) => {
      return new JInput(element).isNotIncludesSpchar().getResult();
    });
    return this;
  }
  
  isId() {
    this.foreach((element) => {
      return new JInput(element).isId().getResult();
    });
    return this;
  }
  
  isNotId() {
    this.foreach((element) => {
      return new JInput(element).isNotId().getResult();
    });
    return this;
  }
  
  isPassword() {
    this.foreach((element) => {
      return new JInput(element).isPassword().getResult();
    });
    return this;
  }
  
  isNotPassword() {
    this.foreach((element) => {
      return new JInput(element).isNotPassword().getResult();
    });
    return this;
  }
  
  isStrongPassword() {
    this.foreach((element) => {
      return new JInput(element).isStrongPassword().getResult();
    });
    return this;
  }
  
  isNotStrongPassword() {
    this.foreach((element) => {
      return new JInput(element).isNotStrongPassword().getResult();
    });
    return this;
  }
  
  isEmail() {
    this.foreach((element) => {
      return new JInput(element).isEmail().getResult();
    });
    return this;
  }
  
  isNotEmail() {
    this.foreach((element) => {
      return new JInput(element).isNotEmail().getResult();
    });
    return this;
  }
  
  isUrl() {
    this.foreach((element) => {
      return new JInput(element).isUrl().getResult();
    });
    return this;
  }
  
  isNotUrl() {
    this.foreach((element) => {
      return new JInput(element).isNotUrl().getResult();
    });
    return this;
  }
  
  isPhoneNumber() {
    this.foreach((element) => {
      return new JInput(element).isPhoneNumber().getResult();
    });
    return this;
  }
  
  isNotPhoneNumber() {
    this.foreach((element) => {
      return new JInput(element).isNotPhoneNumber().getResult();
    });
    return this;
  }
  
  isPostalCode() {
    this.foreach((element) => {
      return new JInput(element).isPostalCode().getResult();
    });
    return this;
  }
  
  isNotPostalCode() {
    this.foreach((element) => {
      return new JInput(element).isNotPostalCode().getResult();
    });
    return this;
  }
  
  test(pattern) {
    this.foreach((element) => {
      return new JInput(element).test(pattern).getResult();
    });
    return this;
  }
  
  setRequired(bool = true) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setRequired(bool).getResult();
    });
    return this;
  }
  
  setReportMessage(message = '') {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setReportMessage(message).getResult();
    });
    return this;
  }
  
  reportValidity() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).reportValidity().getResult();
    });
    return this;
  }
  
  checkValidity() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).checkValidity().getResult();
    });
    return this;
  }
  
  setPattern(pattern) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setPattern(pattern).getResult();
    });
    return this;
  }
  
  setNumberCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setNumberCheckPattern().getResult();
    });
    return this;
  }
  
  setEnglishCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setEnglishCheckPattern().getResult();
    });
    return this;
  }
  
  setLowercaseCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setLowercaseCheckPattern().getResult();
    });
    return this;
  }
  
  setUppercaseCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setUppercaseCheckPattern().getResult();
    });
    return this;
  }
  
  setKoreanCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setKoreanCheckPattern().getResult();
    });
    return this;
  }
  
  setJapaneseCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setJapaneseCheckPattern().getResult();
    });
    return this;
  }
  
  setHiraganaCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setHiraganaCheckPattern().getResult();
    });
    return this;
  }
  
  setKatakanaCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setKatakanaCheckPattern().getResult();
    });
    return this;
  }
  
  setKanjiCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setKanjiCheckPattern().getResult();
    });
    return this;
  }
  
  setChineseCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setChineseCheckPattern().getResult();
    });
    return this;
  }
  
  setIncludesSpaceCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setIncludesSpaceCheckPattern().getResult();
    });
    return this;
  }
  
  setIncludesSpcharCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setIncludesSpcharCheckPattern().getResult();
    });
    return this;
  }
  
  setIdCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setIdCheckPattern().getResult();
    });
    return this;
  }
  
  setPasswordCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setPasswordCheckPattern().getResult();
    });
    return this;
  }
  
  setStrongPasswordCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setStrongPasswordCheckPattern().getResult();
    });
    return this;
  }
  
  setEmailCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setEmailCheckPattern().getResult();
    });
    return this;
  }
  
  setUrlCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setUrlCheckPattern().getResult();
    });
    return this;
  }
  
  setPhoneNumberCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setPhoneNumberCheckPattern().getResult();
    });
    return this;
  }
  
  setPostalCodeCheckPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).setPostalCodeCheckPattern().getResult();
    });
    return this;
  }
  
  allowNumberOnly(fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).allowNumberOnly(fn).getResult();
    });
    return this;
  }
  
  allowEnglishOnly() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).allowEnglishOnly().getResult();
    });
    return this;
  }
  
  allowLowercaseOnly() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).allowLowercaseOnly().getResult();
    });
    return this;
  }
  
  allowKoreanOnly() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).allowKoreanOnly().getResult();
    });
    return this;
  }
  
  allowJapaneseOnly() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).allowJapaneseOnly().getResult();
    });
    return this;
  }
  
  allowHiraganaOnly() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).allowHiraganaOnly().getResult();
    });
    return this;
  }
  
  allowKatakanaOnly() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).allowKatakanaOnly().getResult();
    });
    return this;
  }
  
  allowKanjiOnly() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).allowKanjiOnly().getResult();
    });
    return this;
  }
  
  allowChineseOnly() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).allowChineseOnly().getResult();
    });
    return this;
  }
  
  disallowSpace() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).disallowSpace().getResult();
    });
    return this;
  }
  
  disallowSpchar() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).disallowSpchar().getResult();
    });
    return this;
  }
  
  allowIdPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).allowIdPattern().getResult();
    });
    return this;
  }
  
  allowEmailPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).allowEmailPattern().getResult();
    });
    return this;
  }
  
  allowUrlPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).allowUrlPattern().getResult();
    });
    return this;
  }
  
  allowPhoneNumberPattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).allowPhoneNumberPattern().getResult();
    });
    return this;
  }
  
  allowPostalCodePattern() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      return new JInput(element).allowPostalCodePattern().getResult();
    });
    return this;
  }
}

class JRadios extends JInputs {
  type = 'radio';
  
  check(index = 0, bool = true) {
    if (this.result !== true) return this;
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      if (i == index) {
        element.checked = bool;
        break;
      }
    }
    return this;
  }
  
  checkByValue(value, bool = true) {
    if (this.result !== true) return this;
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      if (element.value == value) {
        element.checked = bool;
        break;
      }
    }
    return this;
  }
  
  getCheckedValue() {
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      if (element.checked) {
        return element.value;
      }
    }
  }
}

class JCheckboxes extends JInputs {
  type = 'checkbox';
  
  check(index = 0, bool = true) {
    if (this.result !== true) return this;
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      if (i == index) {
        element.checked = bool;
      }
    }
    return this;
  }
  
  checkByValue(value, bool = true) {
    if (this.result !== true) return this;
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      if (element.value == value) {
        element.checked = bool;
      }
    }
    return this;
  }
  
  getCheckedValues() {
    let values = [];
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      if (element.checked) {
        values.push(element.value);
      }
    }
    return values;
  }
  
  getCheckedCount() {
    let count = 0;
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      if (element.checked) {
        count++;
      }
    }
    return count;
  }
  
  getSumOfCheckedValues() {
    let sum = 0;
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      if (element.checked) {
        if (!NaN(element.value)) {
          sum += Number(element.value);
        }
      }
    }
    return sum;
  }
  
  checkAll(bool = true) {
    if (this.result !== true) return this;
    for (i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      element.checked = bool;
    }
    return this;
  }
}

class JError extends Error {
  constructor(msg) {
    super(`JWrap: ${msg}`);
  }
}

class JActionFetchError extends JError {
  constructor(url) {
    super(`JActionFetchError (url: ${url})`);
  }
}

class JElementNullError extends JError {
  constructor(varName) {
    super(`JElementNullError (varName: ${varName})`);
  }
}

class JElementInstantiationError extends JError {
  constructor(elementTpye) {
    super(`JElementInstantiationError (element: ${elementTpye})`);
  }
}

class JElementIdError extends JError {
  constructor(id) {
    super(`JElementIdError (id: ${id})`);
  }
}

class JElementTagNameError extends JError {
  constructor(id) {
    super(`JElementTagNameError (id: ${id})`);
  }
}

class JElementTypeError extends JError {
  constructor(id) {
    super(`JElementTypeError (id: ${id})`);
  }
}

class JElementsNameError extends JError {
  constructor(parentId, name) {
    super(`JElementsNameError (parentId: ${parentId}, name: ${name})`);
  }
}

class JElementsTagNameError extends JError {
  constructor(parentId, name) {
    super(`JElementsTagNameError (parentId: ${parentId}, name: ${name})`);
  }
}

class JElementsTypeError extends JError {
  constructor(parentId, name) {
    super(`JElementsTypeError (parentId: ${parentId}, name: ${name})`);
  }
}

class JElementsIndexOutOfBoundsError extends JError {
  constructor(parentId, name, index) {
    super(
    `JElementsIndexOutOfBoundsError (parentId: ${parentId}, name: ${name}, index: ${index})`,
    );
  }
}

class JFormFetchError extends JError {
  constructor(url) {
    super(`JFormFetchError (url: ${url})`);
  }
}
