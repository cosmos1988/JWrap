/**
 * @fileoverview JWrap is a JavaScript library that provides a variety of functions and classes to simplify web development.
 * @author Joo Yong-jin
 * @version 2025.1.9
 * @license MIT
 */

/**
 * @classdesc JWrap은 웹 개발에서 자주 사용하는 다양한 기능(알림/확인, DOM 이벤트 처리, 
 * 날짜/시간 유틸리티 등)을 간소화하기 위한 정적 함수들을 제공하는 유틸리티 클래스입니다.
 * 
 * @class JWrap
 */
class JWrap {
  /**
   * 라이브러리 이름
   * @static
   * @type {string}
   */
  static name = 'JWrap';

  /**
   * 라이브러리 버전
   * @static
   * @type {string}
   */
  static version = '2025.1.9';

  /**
   * 라이브러리 작성자
   * @static
   * @type {string}
   */
  static author = 'Joo Yong-jin';

  /**
   * 라이브러리 관련 웹사이트 주소
   * @static
   * @type {string}
   */
  static website = 'https://github.com/cosmos1988/JWrap/tree/main';

  /**
   * 라이브러리 기본 정보(이름, 버전 등)를 문자열 형태로 반환합니다.
   *
   * @static
   * @returns {string} 라이브러리 정보
   */
  static info() {
    const text = `
      ■■■ ■     ■
        ■ ■  ■  ■ ■   ■ ■■■■  ■■■■■
        ■ ■  ■  ■ ■ ■    ■■■■ ■   ■
  ■     ■ ■  ■  ■ ■■    ■   ■ ■■■■■
   ■■■■■   ■■ ■■  ■     ■■■■■ ■
  
  name: ${this.name}
  version: ${this.version}
  author: ${this.author}
  website: ${this.website}
`;
    return text;
  }

  /**
   * 브라우저의 alert 함수를 호출합니다.
   *
   * @static
   * @param {string} message - 표시할 메시지
   * @param {*} _option - 옵션 (현재는 사용되지 않음)
   * @returns {void}
   */
  static alertFn = (message, _option) => alert(message);

  /**
   * 브라우저의 confirm 함수를 호출합니다.
   *
   * @static
   * @param {string} message - 표시할 메시지
   * @param {*} _option - 옵션 (현재는 사용되지 않음)
   * @returns {boolean} 확인(OK) 시 true, 취소 시 false
   */
  static confirmFn = (message, _option) => confirm(message);

  /**
   * ID 생성 시 구분자로 사용할 문자
   *
   * @static
   * @type {string}
   */
  static idgenSeparator = '-';

  /**
   * alertFn을 간단하게 호출할 수 있는 헬퍼 메서드
   *
   * @static
   * @param {string} message - 표시할 메시지
   * @param {*} option - 옵션 (현재 사용되지 않음)
   * @returns {void}
   */
  static alert(message, option) {
    this.alertFn(message, option);
  }

  /**
   * confirmFn을 간단하게 호출할 수 있는 헬퍼 메서드
   *
   * @static
   * @param {string} message - 표시할 메시지
   * @param {*} option - 옵션 (현재 사용되지 않음)
   * @returns {boolean} 확인(OK) 시 true, 취소 시 false
   */
  static confirm(message, option) {
    return this.confirmFn(message, option);
  }

  /**
   * window load 이벤트를 등록합니다.
   *
   * @static
   * @param {Function} fn - load 이벤트 발생 시 호출될 콜백
   * @returns {void}
   */
  static load(fn) {
    document.addEventListener('load', fn);
  }

  /**
   * DOMContentLoaded 이벤트를 등록합니다.
   *
   * @static
   * @param {Function} fn - DOMContentLoaded 시 호출될 콜백
   * @returns {void}
   */
  static ready(fn) {
    document.addEventListener('DOMContentLoaded', fn);
  }

  /**
   * 가변 인자를 받아 구분자(기본 '-')로 join한 문자열을 만듭니다.
   *
   * @static
   * @param {...(string|number)} parts - 조합할 여러 문자열/숫자
   * @returns {string} 결합된 문자열
   */
  static idgen(...parts) {
    let separator = this.idgenSeparator;
    if (separator == null) {
      separator = '-';
    }
    return parts.join(separator);
  }

  /**
   * 지정된 URL로 이동합니다(window.location.assign).
   *
   * @static
   * @param {string} url - 이동할 URL
   * @returns {void}
   */
  static go(url) {
    window.location.assign(url);
  }

  /**
   * 브라우저 뒤로가기(window.history.back).
   *
   * @static
   * @returns {void}
   */
  static back() {
    window.history.back();
  }

  /**
   * 지정된 URL로 현재 페이지를 대체하여 이동(window.location.replace).
   *
   * @static
   * @param {string} url - 이동할 URL
   * @returns {void}
   */
  static teleport(url) {
    window.location.replace(url);
  }

  /**
   * 주어진 텍스트를 클립보드에 복사합니다.
   *
   * @static
   * @param {string} text - 복사할 텍스트
   * @param {Function} fn - 복사 성공 후 실행할 콜백
   * @returns {void}
   */
  static clipboard(text, fn) {
    navigator.clipboard.writeText(text).then(fn);
  }

  /**
   * 동기 방식으로 주어진 시간(ms) 동안 코드 실행을 지연시킵니다.
   * (주의: UI가 멈춤)
   *
   * @static
   * @param {number} ms - 지연할 밀리초(ms)
   * @returns {void}
   */
  static sleep(ms) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + ms);
  }

  /**
   * 스톱워치를 시작하고 시작 시간을 반환합니다.
   *
   * @static
   * @param {Function} [fn] - 시작 시간(timestmap)을 인자로 받는 콜백(선택)
   * @returns {number} 시작 시간의 timestamp
   */
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

  /**
   * 스톱워치를 종료하고 경과 시간을 반환합니다.
   *
   * @static
   * @param {number} startTime - stopwatchStart에서 받은 시작 시간
   * @param {Function} [fn] - 경과 시간을 인자로 받는 콜백(선택)
   * @returns {number} 경과 시간(ms)
   */
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

  /**
   * 페이지를 최상단까지 스크롤합니다.
   *
   * @static
   * @param {number} [speed=1] - 스크롤 속도 비율(0은 1로 처리)
   * @returns {void}
   */
  static scrollToTop(speed = 1) {
    if (speed === 0) speed = 1;
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(() => JWrap.scrollToTop(speed));
      window.scrollTo(window.scrollX, c - c / speed);
    }
  }

  /**
   * 페이지를 최하단까지 스크롤합니다.
   *
   * @static
   * @param {number} [speed=1] - 스크롤 속도 비율(0은 1로 처리)
   * @returns {void}
   */
  static scrollToBottom(speed = 1) {
    if (speed === 0) speed = 1;
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );
    const target = documentHeight - window.innerHeight;
    if (c < target) {
      window.requestAnimationFrame(() => JWrap.scrollToBottom(speed));
      window.scrollTo(window.scrollX, c + (target - c) / speed);
    }
  }

  /**
   * 현재 userAgent가 모바일 기기인지 여부를 정규식으로 판별합니다.
   *
   * @static
   * @returns {boolean} 모바일 기기면 true, 아니면 false
   */
  static isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  }

  /**
   * fetch API를 사용하여 POST 요청을 보냅니다.
   * 
   * 응답 Content-Type에 따라 적절한 형태(json, text, formData, blob, arrayBuffer)로 반환합니다.
   *
   * @static
   * @async
   * @param {string} url - 요청을 보낼 URL
   * @param {Object} [object={}] - 전송할 body 데이터(기본 값: 빈 객체)
   * @returns {Promise<*>} 응답 데이터를 적절한 형태로 파싱하여 반환
   * @throws {JFetchError} 응답이 ok가 아닐 경우 JFetchError 발생
   */
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
        // JFetchError는 프로젝트 내에서 별도로 정의되어 있다고 가정
        throw new JFetchError();
      });
  }

  /**
   * Date 객체를 'YYYY-MM-DD' 포맷의 문자열로 변환합니다.
   *
   * @static
   * @param {Date} date - 변환할 Date 객체
   * @returns {string|*} 변환된 문자열, 혹은 date가 Date가 아니라면 그대로 반환
   */
  static dateToString(date) {
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    return date;
  }

  /**
   * 날짜 형태의 문자열을 Date 객체로 변환합니다.
   *
   * @static
   * @param {string} str - 'YYYY-MM-DD' 등 Date.parse 가능한 문자열
   * @returns {Date|*} 변환된 Date 객체, 문자열이 아니면 그대로 반환
   */
  static stringToDate(str) {
    if (typeof str === 'string') {
      return new Date(Date.parse(str));
    }
    return str;
  }

  /**
   * 오늘 날짜를 'YYYY-MM-DD' 형태로 반환합니다.
   *
   * @static
   * @returns {string} 오늘 날짜
   */
  static today() {
    return JWrap.dateToString(new Date());
  }

  /**
   * 현재 시간을 'HH:MM' 형태로 반환합니다.
   *
   * @static
   * @returns {string} 현재 시간
   */
  static time() {
    const time = new Date();
    return `${time.getHours()}:${time.getMinutes()}`;
  }
}

/**
 * @classdesc 기본적인 기능(확인창, 알림창 등)을 제공하는 최상위 객체 클래스.
 *
 * @class JObject
 */
class JObject {
  /**
   * 내부적으로 조건문(Condition)을 저장하는 변수
   * @type {JCondition|undefined}
   */
  condition;

  /**
   * 메서드를 실제로 실행할지 결정하는 플래그
   * @type {boolean}
   */
  enable = true;

  /**
   * confirm 창을 띄우고 그 결과를 저장합니다.
   *
   * @param {string} [message=''] - 확인창에 표시할 메시지
   * @returns {this} 메서드 체이닝을 위해 현재 객체 반환
   */
  confirm(message = '') {
    if (this.enable !== true) return this;
    this.result = JWrap.confirm(message);
    return this;
  }

  /**
   * alert 창을 띄웁니다.
   *
   * @param {string} [message=''] - 알림창에 표시할 메시지
   * @returns {this} 메서드 체이닝을 위해 현재 객체 반환
   */
  alert(message = '') {
    if (this.enable !== true) return this;
    JWrap.alert(message);
    return this;
  }
}

/**
 * @classdesc DOM Element를 래핑하여 쉽게 접근하고 조작하기 위한 클래스.
 * @extends JObject
 */
class JElement extends JObject {

  /**
   * 내부적으로 참조할 실제 DOM Element
   * @type {Element}
   */
  element;

  /**
   * 생성자
   * 
   * @constructor
   * @param {Element} element - 사용할 DOM Element
   * @throws {JNullPointerError} element가 null/undefined일 때
   * @throws {JTypeError} element가 Element 타입이 아닐 때
   */
  constructor(element) {
    if (!element) {
      throw new JNullPointerError();
    }
    if (!(element instanceof Element)) {
      throw new JTypeError();
    }
    super();
    this.element = element;
  }

  /**
   * 여러 인자를 받아서 JElement를 생성하는 정적 메서드
   *
   * @static
   * @param {*} arg1 - 부모ID이거나 element의 id, 또는 기타 첫 번째 인자
   * @param {*} arg2 - 부모ID일 수도 있고 select할 name일 수도 있음
   * @param {*} arg3 - select할 index 등
   * @returns {JElement} 새로 생성된 JElement
   */
  static from(arg1, arg2, arg3) {
    if (arg1 && arg2) {
      return this.select(arg1, arg2, arg3);
    } else {
      return this.get(arg1);
    }
  }

  /**
   * id를 통해 JElement를 찾는 정적 메서드
   *
   * @static
   * @param {string} id - document.getElementById()로 찾을 id
   * @returns {JElement} 찾아낸 element를 래핑한 JElement
   * @throws {JElementIdError} element가 존재하지 않을 때
   * @throws {JElementTagNameError} this.tagName과 실제 tagName이 다를 때
   * @throws {JElementTypeError} this.type과 실제 type이 다를 때
   */
  static get(id) {
    let element = document.getElementById(id);
    if (!element) {
      throw new JElementIdError();
    }
    if (this.tagName) {
      if (element.tagName !== this.tagName) {
        throw new JElementTagNameError();
      }
    }
    if (this.type) {
      if (element.type !== this.type) {
        throw new JElementTypeError();
      }
    }
    return new this(element);
  }

  /**
   * 부모 엘리먼트에서 name으로 검색, 특정 index의 Element를 찾아 JElement를 생성
   *
   * @static
   * @param {string} parentId - 부모 요소 id
   * @param {string} name - querySelector로 검색할 name
   * @param {number} [index=0] - 가져올 인덱스
   * @returns {JElement} 새로 생성된 JElement
   * @throws {JElementIdError} 부모 요소가 없을 때
   * @throws {JElementNameError} 해당 name의 요소가 없을 때
   * @throws {JIndexOutOfBoundsError} index가 범위를 벗어났을 때
   * @throws {JElementTagNameError} this.tagName과 실제 tagName이 다를 때
   * @throws {JElementTypeError} this.type과 실제 type이 다를 때
   */
  static select(parentId, name, index = 0) {
    let parentElement = document.getElementById(parentId);
    if (!parentElement) {
      throw new JElementIdError();
    }
    let elements = Array.from(
      parentElement.querySelectorAll(`[name="${name}"]`),
    );
    if (!elements) {
      throw new JElementNameError();
    }
    if (index > elements.length - 1) {
      throw new JIndexOutOfBoundsError();
    }
    let element = elements[index];
    if (this.tagName) {
      if (element.tagName !== this.tagName) {
        throw new JElementTagNameError();
      }
    }
    if (this.type) {
      if (element.type !== this.type) {
        throw new JElementTypeError();
      }
    }
    return new this(element);
  }

  /**
   * 새로운 DOM Element를 만들고 JElement로 래핑
   *
   * @static
   * @param {string} [id] - element의 id
   * @param {string} [name] - element의 name
   * @param {string} [tagName] - 생성할 태그이름
   * @param {string} [type] - input일 경우 사용될 type (예: 'text')
   * @returns {JElement} 새로 생성된 JElement
   */
  static create(id, name, tagName, type) {
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

  /**
   * if 문처럼 조건을 사용하기 위해 condition 객체를 생성.
   *
   * @returns {JCondition} condition 객체
   */
  if() {
    this.condition = new JCondition(this);
    return this.condition;
  }

  /**
   * if()에서 이어지는 else 처리를 위해 호출.
   *
   * @returns {this} 조건 결과에 따라 enable이 false일 수 있으므로 현재 객체 그대로 반환
   */
  else() {
    return this.condition.else();
  }

  /**
   * element.click()을 호출하여 클릭 이벤트를 트리거합니다.
   *
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  click() {
    if (this.enable !== true) return this;
    this.element.click();
    return this;
  }

  /**
   * element.focus()를 호출합니다.
   *
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  focus() {
    if (this.enable !== true) return this;
    this.element.focus();
    return this;
  }

  /**
   * element.blur()를 호출합니다.
   *
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  blur() {
    if (this.enable !== true) return this;
    this.element.blur();
    return this;
  }

  /**
   * 해당 엘리먼트를 뷰포트에 표시(스크롤)합니다.
   * (중복 선언이 있으므로 실제 프로젝트에서는 하나만 남기는 것이 좋습니다.)
   *
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  scrollIntoView() {
    if (this.enable !== true) return this;
    this.element.scrollIntoView();
    return this;
  }

  /**
   * 해당 엘리먼트를 부드럽게 스크롤로 표시합니다.
   * (중복 선언이 있으므로 실제 프로젝트에서는 하나만 남기는 것이 좋습니다.)
   *
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  scrollIntoView() {
    if (this.enable !== true) return this;
    this.element.scrollIntoView({ behavior: 'smooth' });
    return this;
  }

  /**
   * element.textContent를 반환합니다.
   *
   * @returns {string} 엘리먼트의 텍스트 콘텐츠
   */
  getText() {
    return this.element.textContent;
  }

  /**
   * element.textContent를 설정합니다.
   *
   * @param {string} text - 설정할 텍스트
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setText(text) {
    if (this.enable !== true) return this;
    this.element.textContent = text;
    return this;
  }

  /**
   * element.style 객체를 반환합니다.
   *
   * @returns {CSSStyleDeclaration} 스타일 객체
   */
  getStyle() {
    return this.element.style;
  }

  /**
   * 인자로 받은 CSS 속성/값을 적용합니다.
   *
   * @param {string} property - CSS 속성명
   * @param {string} value - CSS 속성값
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setStyle(property, value) {
    if (this.enable !== true) return this;
    this.element.style[property] = value;
    return this;
  }

  /**
   * element.value를 반환합니다.
   *
   * @returns {string} value 값
   */
  getValue() {
    return this.element.value;
  }

  /**
   * element.value를 설정합니다.
   *
   * @param {string} value - 설정할 value
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setValue(value) {
    if (this.enable !== true) return this;
    this.element.value = value;
    return this;
  }

  /**
   * element.value에서 currentValue를 newValue로 치환 (실제 치환 적용에는 재할당 필요)
   *
   * @param {string|RegExp} currentValue - 치환 대상
   * @param {string} newValue - 치환할 값
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  replace(currentValue, newValue) {
    if (this.enable !== true) return this;
    this.element.value.replace(currentValue, newValue);
    return this;
  }

  /**
   * element.value 내에서 currentValue와 매칭되는 모든 부분을 newValue로 치환
   * (실제 치환 적용에는 재할당 필요)
   *
   * @param {string|RegExp} currentValue - 치환 대상
   * @param {string} newValue - 치환할 값
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  replaceAll(currentValue, newValue) {
    if (this.enable !== true) return this;
    this.element.value.replaceAll(currentValue, newValue);
    return this;
  }

  /**
   * element.max 속성을 반환합니다.
   *
   * @returns {string} max 속성값
   */
  getMax() {
    return this.element.max;
  }

  /**
   * element.max 속성을 설정합니다.
   *
   * @param {string} time - 설정할 값
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setMax(time) {
    if (this.enable !== true) return this;
    this.element.max = time;
    return this;
  }

  /**
   * element.min 속성을 반환합니다.
   *
   * @returns {string} min 속성값
   */
  getMin() {
    return this.element.min;
  }

  /**
   * element.min 속성을 설정합니다.
   *
   * @param {string} time - 설정할 값
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setMin(time) {
    if (this.enable !== true) return this;
    this.element.min = time;
    return this;
  }

  /**
   * element.step 속성을 반환합니다.
   *
   * @returns {string} step 속성값
   */
  getStep() {
    return this.element.step;
  }

  /**
   * element.step 속성을 설정합니다.
   *
   * @param {string} sec - 설정할 값
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setStep(sec) {
    if (this.enable !== true) return this;
    this.element.step = sec;
    return this;
  }

  /**
   * element의 innerHTML을 반환합니다.
   *
   * @returns {string} innerHTML 값
   */
  getInnerHtml() {
    return this.element.innerHTML;
  }

  /**
   * element의 innerHTML을 설정합니다.
   *
   * @param {string} html - 설정할 HTML
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setInnerHtml(html) {
    if (this.enable !== true) return this;
    this.element.innerHTML = html;
    return this;
  }

  /**
   * element의 outerHTML을 반환합니다.
   *
   * @returns {string} outerHTML 값
   */
  getOuterHtml() {
    return this.element.outerHTML;
  }

  /**
   * element의 outerHTML을 설정합니다.
   *
   * @param {string} html - 설정할 HTML
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setOuterHtml(html) {
    if (this.enable !== true) return this;
    this.element.outerHTML = html;
    return this;
  }

  /**
   * 현재 엘리먼트의 이전(beforebegin) 위치에 html을 삽입합니다.
   *
   * @param {string} html - 삽입할 HTML
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  insertBeforebeginHtml(html) {
    if (this.enable !== true) return this;
    this.element.insertAdjacentHTML('beforebegin', html);
    return this;
  }

  /**
   * 현재 엘리먼트 내부의 첫 부분(afterbegin)에 html을 삽입합니다.
   *
   * @param {string} html - 삽입할 HTML
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  insertAfterbeginHtml(html) {
    if (this.enable !== true) return this;
    this.element.insertAdjacentHTML('afterbegin', html);
    return this;
  }

  /**
   * 현재 엘리먼트 내부의 마지막(beforeend)에 html을 삽입합니다.
   *
   * @param {string} html - 삽입할 HTML
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  insertBeforeendHtml(html) {
    if (this.enable !== true) return this;
    this.element.insertAdjacentHTML('beforeend', html);
    return this;
  }

  /**
   * 현재 엘리먼트 바로 뒤(afterend)에 html을 삽입합니다.
   *
   * @param {string} html - 삽입할 HTML
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  insertAfterendHtml(html) {
    if (this.enable !== true) return this;
    this.element.insertAdjacentHTML('afterend', html);
    return this;
  }

  /**
   * 자식 노드를 제거합니다.
   *
   * @param {Node} child - 제거할 노드
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  removeChild(child) {
    if (this.enable !== true) return this;
    this.element.removeChild(child);
    return this;
  }

  /**
   * 자식 노드를 새로운 노드로 교체합니다.
   *
   * @param {Node} newChild - 새 노드
   * @param {Node} oldChild - 교체할 기존 노드
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  replaceChild(newChild, oldChild) {
    if (this.enable !== true) return this;
    this.element.replaceChild(newChild, oldChild);
    return this;
  }

  /**
   * 자식 노드를 추가합니다.
   *
   * @param {Node|JElement} child - 추가할 노드(또는 JElement)
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  appendChild(child) {
    if (this.enable !== true) return this;
    if (child instanceof JElement) {
      let element = child.getElement();
      this.element.appendChild(element);
    } else {
      this.element.appendChild(child);
    }
    return this;
  }

  /**
   * element의 disabled 속성을 가져옵니다.
   *
   * @returns {boolean} disabled 여부
   */
  getDisabled() {
    return this.element.disabled;
  }

  /**
   * element의 disabled 속성을 설정합니다.
   *
   * @param {boolean} [_bool=true] - true면 disabled, false면 enabled
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setDisabled(_bool = true) {
    if (this.enable !== true) return this;
    this.element.disabled = _bool;
    return this;
  }

  /**
   * element의 readOnly 여부를 가져옵니다.
   *
   * @returns {boolean} readOnly 여부
   */
  getReadonly() {
    return this.element.readOnly;
  }

  /**
   * element의 readOnly 속성을 설정합니다.
   *
   * @param {boolean} [_bool=true] - true면 readOnly, false면 쓰기 가능
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setReadonly(_bool = true) {
    if (this.enable !== true) return this;
    this.element.readOnly = _bool;
    return this;
  }

  /**
   * display:none 스타일을 적용합니다.
   *
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  addDisplayNone() {
    if (this.enable !== true) return this;
    this.element.style.display = 'none';
    return this;
  }

  /**
   * display:none 스타일을 제거합니다.
   *
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  removeDisplayNone() {
    if (this.enable !== true) return this;
    this.element.style.display = '';
    return this;
  }

  /**
   * element.classList를 반환합니다.
   *
   * @returns {DOMTokenList} classList
   */
  getClassList() {
    return this.element.classList;
  }

  /**
   * 해당 클래스명을 포함하고 있는지 확인합니다.
   *
   * @param {string} className - 확인할 클래스명
   * @returns {boolean} 포함되어 있으면 true
   */
  containsClass(className) {
    return this.element.classList.contains(className);
  }

  /**
   * 클래스를 추가합니다.
   *
   * @param {string} className - 추가할 클래스명
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  addClass(className) {
    if (this.enable !== true) return this;
    this.element.classList.add(className);
    return this;
  }

  /**
   * 클래스를 제거합니다.
   *
   * @param {string} className - 제거할 클래스명
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  removeClass(className) {
    if (this.enable !== true) return this;
    this.element.classList.remove(className);
    return this;
  }

  /**
   * 이벤트를 등록합니다.
   *
   * @param {string} event - 이벤트명 (예: 'click', 'keyup')
   * @param {Function} fn - 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  addEvent(event, fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener(event, fn, option);
    return this;
  }

  /**
   * keyup 이벤트를 등록합니다.
   *
   * @param {Function} fn - keyup 시 호출될 콜백
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  addKeyupEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('keyup', fn, option);
    return this;
  }

  /**
   * keypress 이벤트를 등록합니다.
   *
   * @param {Function} fn - keypress 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addKeypressEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('keypress', fn, option);
    return this;
  }

  /**
   * keydown 이벤트를 등록합니다.
   *
   * @param {Function} fn - keydown 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addKeydownEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('keydown', fn, option);
    return this;
  }

  /**
   * click 이벤트를 등록합니다.
   *
   * @param {Function} fn - click 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addClickEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('click', fn, option);
    return this;
  }

  /**
   * dblclick 이벤트를 등록합니다.
   *
   * @param {Function} fn - dblclick 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addDblclickEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('dblclick', fn, option);
    return this;
  }

  /**
   * drag 이벤트를 등록합니다.
   *
   * @param {Function} fn - drag 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addDragEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('drag', fn, option);
    return this;
  }

  /**
   * dragstart 이벤트를 등록합니다.
   *
   * @param {Function} fn - dragstart 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addDragstartEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('dragstart', fn, option);
    return this;
  }

  /**
   * dragend 이벤트를 등록합니다.
   *
   * @param {Function} fn - dragend 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addDragendEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('dragend', fn, option);
    return this;
  }

  /**
   * dragenter 이벤트를 등록합니다.
   *
   * @param {Function} fn - dragenter 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addDragenterEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('dragenter', fn, option);
    return this;
  }

  /**
   * dragleave 이벤트를 등록합니다.
   *
   * @param {Function} fn - dragleave 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addDragleaveEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('dragleave', fn, option);
    return this;
  }

  /**
   * dragover 이벤트를 등록합니다.
   *
   * @param {Function} fn - dragover 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addDragoverEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('dragover', fn, option);
    return this;
  }

  /**
   * touchstart 이벤트를 등록합니다.
   *
   * @param {Function} fn - touchstart 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addTouchstartEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('touchstart', fn, option);
    return this;
  }

  /**
   * touchmove 이벤트를 등록합니다.
   *
   * @param {Function} fn - touchmove 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addTouchmoveEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('touchmove', fn, option);
    return this;
  }

  /**
   * touchend 이벤트를 등록합니다.
   *
   * @param {Function} fn - touchend 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addTouchendEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('touchend', fn, option);
    return this;
  }

  /**
   * touchcancel 이벤트를 등록합니다.
   *
   * @param {Function} fn - touchcancel 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addTouchcancelEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('touchcancel', fn, option);
    return this;
  }

  /**
   * input 이벤트를 등록합니다.
   *
   * @param {Function} fn - input 발생 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addInputEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('input', fn, option);
    return this;
  }

  /**
   * change 이벤트를 등록합니다.
   *
   * @param {Function} fn - change 발생 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addChangeEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('change', fn, option);
    return this;
  }

  /**
   * focus 이벤트를 등록합니다.
   *
   * @param {Function} fn - focus 발생 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addFocusEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('focus', fn, option);
    return this;
  }

  /**
   * blur 이벤트를 등록합니다.
   *
   * @param {Function} fn - blur 발생 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addBlurEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('blur', fn, option);
    return this;
  }

  /**
   * focusin 이벤트를 등록합니다.
   *
   * @param {Function} fn - focusin 발생 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addFocusinEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('focusin', fn, option);
    return this;
  }

  /**
   * focusout 이벤트를 등록합니다.
   *
   * @param {Function} fn - focusout 발생 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  addFocusoutEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.addEventListener('focusout', fn, option);
    return this;
  }

  /**
   * 지정된 이벤트를 제거합니다.
   *
   * @param {string} event - 제거할 이벤트명
   * @param {Function} fn - 제거할 이벤트 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeEvent(event, fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener(event, fn, option);
    return this;
  }

  /**
   * keyup 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeKeyupEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('keyup', fn, option);
    return this;
  }

  /**
   * keypress 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeKeypressEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('keypress', fn, option);
    return this;
  }

  /**
   * keydown 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeKeydownEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('keydown', fn, option);
    return this;
  }

  /**
   * click 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeClickEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('click', fn, option);
    return this;
  }

  /**
   * dblclick 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeDblclickEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('dblclick', fn, option);
    return this;
  }

  /**
   * drag 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeDragEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('drag', fn, option);
    return this;
  }

  /**
   * dragstart 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeDragstartEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('dragstart', fn, option);
    return this;
  }

  /**
   * dragend 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeDragendEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('dragend', fn, option);
    return this;
  }

  /**
   * dragenter 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeDragenterEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('dragenter', fn, option);
    return this;
  }

  /**
   * dragleave 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeDragleaveEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('dragleave', fn, option);
    return this;
  }

  /**
   * dragover 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeDragoverEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('dragover', fn, option);
    return this;
  }

  /**
   * touchstart 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeTouchstartEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('touchstart', fn, option);
    return this;
  }

  /**
   * touchmove 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeTouchmoveEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('touchmove', fn, option);
    return this;
  }

  /**
   * touchend 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeTouchendEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('touchend', fn, option);
    return this;
  }

  /**
   * touchcancel 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeTouchcancelEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('touchcancel', fn, option);
    return this;
  }

  /**
   * input 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeInputEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('input', fn, option);
    return this;
  }

  /**
   * change 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeChangeEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('change', fn, option);
    return this;
  }

  /**
   * focus 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeFocusEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('focus', fn, option);
    return this;
  }

  /**
   * blur 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeBlurEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('blur', fn, option);
    return this;
  }

  /**
   * focusin 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeFocusinEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('focusin', fn, option);
    return this;
  }

  /**
   * focusout 이벤트를 제거합니다.
   *
   * @param {Function} fn - 제거할 콜백 함수
   * @param {boolean|EventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this)
   */
  removeFocusoutEvent(fn, option) {
    if (this.enable !== true) return this;
    this.element.removeEventListener('focusout', fn, option);
    return this;
  }

  /**
   * input 이벤트를 강제로 발생(dispatch)시킵니다.
   *
   * @returns {this} 현재 객체(this)
   */
  dispatchInputEvent() {
    if (this.enable !== true) return this;
    let inputEvent = new Event('input', {
      bubbles: true,
      cancelable: true,
    });
    this.element.dispatchEvent(inputEvent);
    return this;
  }

  /**
   * change 이벤트를 강제로 발생(dispatch)시킵니다.
   *
   * @returns {this} 현재 객체(this)
   */
  dispatchChangeEvent() {
    if (this.enable !== true) return this;
    let inputEvent = new Event('change', {
      bubbles: true,
      cancelable: true,
    });
    this.element.dispatchEvent(inputEvent);
    return this;
  }
}

/**
 * @classdesc form 태그를 래핑하여 다양한 편의 메서드를 제공하는 클래스
 * @extends {JElement}
 */
class JForm extends JElement {
  /**
   * 내부적으로 tagName을 'FORM'으로 지정하여 생성
   * @type {string}
   */
  tagName = 'FORM';

  /**
   * form의 action 속성을 설정합니다.
   *
   * @param {string} url - 요청을 보낼 URL
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setAction(url) {
    if (this.enable !== true) return this;
    this.element.action = url;
    return this;
  }

  /**
   * form의 method 속성을 설정합니다.
   *
   * @param {string} method - 전송 방식('GET', 'POST' 등)
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setMethod(method) {
    if (this.enable !== true) return this;
    this.element.method = method;
    return this;
  }

  /**
   * form의 method를 GET으로 설정합니다.
   *
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setGet() {
    if (this.enable !== true) return this;
    this.element.method = 'GET';
    return this;
  }

  /**
   * form의 method를 POST로 설정합니다.
   *
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setPost() {
    if (this.enable !== true) return this;
    this.element.method = 'POST';
    return this;
  }

  /**
   * form의 enctype을 지정합니다.
   *
   * @param {string} contentType - 예) 'application/x-www-form-urlencoded'
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setContentType(contentType) {
    if (this.enable !== true) return this;
    this.element.enctype = contentType;
    return this;
  }

  /**
   * form의 enctype을 multipart/form-data로 설정합니다.
   *
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setMultipart() {
    if (this.enable !== true) return this;
    this.element.enctype = 'multipart/form-data';
    return this;
  }

  /**
   * form의 target 속성을 설정합니다.
   *
   * @param {string} target - 예) '_blank'
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setTarget(target) {
    if (this.enable !== true) return this;
    this.element.target = target;
    return this;
  }

  /**
   * form 내부에서 name으로 찾은 Element를 반환합니다.
   * @param {string} name - 요소의 name
   * @param {number} index - 찾고자 하는 인덱스
   * @returns {JElement} 래핑된 JElement
   */
  getElement(name, index) {
    return JElement.select(this.element, name, index);
  }

  /**
   * form 내부에서 name으로 찾은 input 요소를 반환합니다.
   *
   * @param {string} name - input 요소의 name
   * @param {number} index - 인덱스
   * @returns {JInput} 래핑된 JInput
   */
  getInput(name, index) {
    return JInput.select(this.element, name, index);
  }

  /**
   * form 내부에서 name으로 찾은 다수의 input 요소를 반환합니다.
   *
   * @param {string} name - input 요소의 name
   * @returns {JInputs} 여러 input을 묶어둔 JInputs 객체
   */
  getInputs(name) {
    return JInputs.select(this.element, name);
  }

  /**
   * form 내부에서 name으로 찾은 select 요소를 반환합니다.
   *
   * @param {string} name - select 요소의 name
   * @param {number} index - 인덱스
   * @returns {JSelect} 래핑된 JSelect
   */
  getSelect(name, index) {
    return JSelect.select(this.element, name, index);
  }

  /**
   * form 내부에서 name으로 찾은 file 요소를 반환합니다.
   *
   * @param {string} name - file 요소의 name
   * @param {number} index - 인덱스
   * @returns {JFile} 래핑된 JFile
   */
  getFile(name, index) {
    return JFile.select(this.element, name, index);
  }

  /**
   * form 내부에서 name으로 찾은 radio 요소를 반환합니다.
   *
   * @param {string} name - radio 요소의 name
   * @param {number} index - 인덱스
   * @returns {JRadio} 래핑된 JRadio
   */
  getRadio(name, index) {
    return JRadio.select(this.element, name, index);
  }

  /**
   * form 내부에서 name으로 찾은 다수의 radio 요소를 반환합니다.
   *
   * @param {string} name - radio 요소의 name
   * @returns {JRadios} 여러 radio를 묶어둔 JRadios 객체
   */
  getRadios(name) {
    return JRadios.select(this.element, name);
  }

  /**
   * form 내부에서 name으로 찾은 checkbox 요소를 반환합니다.
   *
   * @param {string} name - checkbox 요소의 name
   * @param {number} index - 인덱스
   * @returns {JCheckbox} 래핑된 JCheckbox
   */
  getCheckbox(name, index) {
    return JCheckbox.select(this.element, name, index);
  }

  /**
   * form 내부에서 name으로 찾은 다수의 checkbox 요소를 반환합니다.
   *
   * @param {string} name - checkbox 요소의 name
   * @returns {JCheckboxes} 여러 checkbox를 묶어둔 JCheckboxes 객체
   */
  getCheckboxes(name) {
    return JCheckboxes.select(this.element, name);
  }

  /**
   * form에서 특정 name의 요소를 제거합니다.
   *
   * @param {string} name - 제거할 요소의 name
   * @param {number} [index=0] - 제거할 인덱스(복수 요소 중 하나만 제거 가능)
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  remove(name, index = 0) {
    if (this.enable !== true) return this;
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

  /**
   * form의 reset() 메서드를 호출합니다.
   *
   * @returns {void}
   */
  reset() {
    this.element.reset();
  }

  /**
   * form 데이터를 객체 형태로 변환하여 반환합니다.
   * (disabled된 요소는 제외)
   *
   * @returns {Object<string,(string|string[])>} key: value 형태 또는 배열 값
   */
  toObject() {
    const disabledInputs = this.element.querySelectorAll('[disabled]');
    disabledInputs.forEach((input) => {
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
    // 다시 disabled 복원
    disabledInputs.forEach((input) => {
      input.setAttribute('disabled', '');
    });
    return obj;
  }

  /**
   * form을 submit합니다. url이 있으면 action을 해당 url로 설정 후 submit.
   *
   * @param {string} [url] - form 전송을 할 URL (없으면 기존 action 사용)
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  submit(url) {
    if (this.enable !== true) return this;
    if (url != null) {
      this.element.action = url;
    }
    this.element.submit();
    return this;
  }

  /**
   * form 데이터를 FormData로 감싸 fetch POST 요청을 보냅니다.
   *
   * @async
   * @param {string} [url] - 요청을 보낼 URL (없으면 form의 action 사용)
   * @returns {Promise<*>} 응답을 적절히 파싱한 결과
   * @throws {JFetchError} 응답 상태가 OK가 아닐 때
   */
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
        throw new JFetchError();
      });
  }
}

/**
 * @classdesc button 태그를 래핑한 클래스
 * @extends {JElement}
 */
class JButton extends JElement {
  /**
   * 내부적으로 tagName을 'BUTTON'으로 지정
   * @type {string}
   */
  tagName = 'BUTTON';
}

/**
 * @classdesc textarea 태그를 래핑한 클래스
 * @extends {JElement}
 */
class JTextarea extends JElement {
  /**
   * 내부적으로 tagName을 'TEXTAREA'로 지정
   * @type {string}
   */
  tagName = 'TEXTAREA';
}

/**
 * @classdesc select 태그를 래핑한 클래스.
 * 다양한 옵션 추가/삭제 및 선택을 쉽게 처리할 수 있습니다.
 *
 * @extends {JElement}
 */
class JSelect extends JElement {
  /**
   * 내부적으로 tagName을 'SELECT'로 지정
   * @type {string}
   */
  tagName = 'SELECT';

  /**
   * 현재 선택된 option의 value를 반환합니다.
   *
   * @returns {string} 선택된 option의 value 값
   */
  selectedValue() {
    return this.element.options[this.element.selectedIndex].value;
  }

  /**
   * 현재 선택된 option의 텍스트를 반환합니다.
   *
   * @returns {string} 선택된 option의 텍스트
   */
  selectedText() {
    return this.element.options[this.element.selectedIndex].text;
  }

  /**
   * 주어진 value에 해당하는 option을 찾아 선택하고, change 이벤트를 발생(dispatch)시킵니다.
   *
   * @param {string} value - 선택할 option의 value
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  selectByValue(value) {
    if (this.enable !== true) return this;
    let options = this.element.options;
    for (let i = 0; i < options.length; i++) {
      let option = options[i];
      if (option.value == value) {
        option.selected = true;
        this.dispatchChangeEvent();
        break;
      }
    }
    return this;
  }

  /**
   * 주어진 텍스트에 해당하는 option을 찾아 선택하고, change 이벤트를 발생(dispatch)시킵니다.
   *
   * @param {string} text - 선택할 option의 텍스트
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  selectByText(text) {
    if (this.enable !== true) return this;
    let options = this.element.options;
    for (let i = 0; i < options.length; i++) {
      let option = options[i];
      if (option.text == text) {
        option.selected = true;
        this.dispatchChangeEvent();
        break;
      }
    }
    return this;
  }

  /**
   * 주어진 인덱스의 option을 선택하고, change 이벤트를 발생(dispatch)시킵니다.
   *
   * @param {number} index - 선택할 option 인덱스
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  selectByIndex(index) {
    if (this.enable !== true) return this;
    let options = this.element.options;
    if (options && options.length > index) {
      options[index].selected = true;
      this.dispatchChangeEvent();
    }
    return this;
  }

  /**
   * option 요소를 새로 생성하여 select에 추가합니다.
   *
   * @param {string} text - 화면에 표시될 텍스트
   * @param {string} value - value 값
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  addOption(text, value) {
    if (this.enable !== true) return this;
    let option = new Option(text, value);
    this.element.add(option);
    return this;
  }

  /**
   * 모든 option 요소를 제거합니다.
   *
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  removeAllOptions() {
    if (this.enable !== true) return this;
    while (this.element.options.length > 0) {
      this.element.remove(0);
    }
    return this;
  }

  /**
   * 주어진 value를 가진 option을 제거합니다.
   *
   * @param {string} value - 제거할 option의 value
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  removeOptionByValue(value) {
    if (this.enable !== true) return this;
    let options = this.element.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value == value) {
        this.element.remove(i);
        break;
      }
    }
    return this;
  }

  /**
   * 주어진 텍스트를 가진 option을 제거합니다.
   *
   * @param {string} text - 제거할 option의 텍스트
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  removeOptionByText(text) {
    if (this.enable !== true) return this;
    let options = this.element.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].text == text) {
        this.element.remove(i);
        break;
      }
    }
    return this;
  }

  /**
   * 주어진 인덱스의 option을 제거합니다.
   *
   * @param {number} index - 제거할 option 인덱스
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  removeOptionByIndex(index) {
    if (this.enable !== true) return this;
    this.element.remove(index);
    return this;
  }
}

/**
 * @classdesc progress 태그를 래핑한 클래스
 * @extends {JElement}
 */
class JProgress extends JElement {
  /**
   * 내부적으로 tagName을 'PROGRESS'로 지정
   * @type {string}
   */
  tagName = 'PROGRESS';
}

/**
 * @classdesc datalist 태그를 래핑한 클래스.
 * 옵션을 추가/삭제하고, input과 연결하여 자동완성 기능 등을 편리하게 사용할 수 있습니다.
 *
 * @extends {JElement}
 */
class JDatalist extends JElement {
  /**
   * 내부적으로 tagName을 'DATALIST'로 지정
   * @type {string}
   */
  tagName = 'DATALIST';

  /**
   * datalist에 option을 추가합니다.
   *
   * @param {string} value - option의 value
   * @param {string} text - 화면에 표시될 텍스트
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  addOption(value, text) {
    if (this.enable !== true) return this;
    let option = new Option(text, value);
    this.element.add(option);
    return this;
  }

  /**
   * 모든 option을 제거합니다.
   *
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  removeAllOptions() {
    if (this.enable !== true) return this;
    while (this.element.options.length > 0) {
      this.element.remove(0);
    }
    return this;
  }

  /**
   * 주어진 value를 가진 option을 제거합니다.
   *
   * @param {string} value - 제거할 option의 value
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  removeOptionByValue(value) {
    if (this.enable !== true) return this;
    let options = this.element.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value == value) {
        this.element.remove(i);
        break;
      }
    }
    return this;
  }

  /**
   * 주어진 텍스트를 가진 option을 제거합니다.
   *
   * @param {string} text - 제거할 option의 텍스트
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  removeOptionByText(text) {
    if (this.enable !== true) return this;
    let options = this.element.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].text == text) {
        this.element.remove(i);
        break;
      }
    }
    return this;
  }

  /**
   * 주어진 인덱스의 option을 제거합니다.
   *
   * @param {number} index - 제거할 option의 인덱스
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  removeOptionByIndex(index) {
    if (this.enable !== true) return this;
    this.element.remove(index);
    return this;
  }
}

/**
 * @classdesc input 태그를 래핑한 클래스.
 * 다양한 패턴 체크 및 입력 제한 함수 등을 제공합니다.
 *
 * @class JInput
 * @extends {JElement}
 */
class JInput extends JElement {
  /**
   * 내부적으로 tagName을 'INPUT'으로 지정
   * @type {string}
   */
  tagName = 'INPUT';

  /**
   * 다양한 정규표현식 패턴을 정적 프로퍼티로 보유합니다.
   * 예) number, english, uppercase, ...
   *
   * @static
   * @type {Object<string, RegExp>}
   */
  static pattern = {
    number: /^[0-9]+$/,
    english: /^[a-zA-Z]+$/,
    lowercase: /^[a-z]+$/,
    uppercase: /^[A-Z]+$/,
    korean: /^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/,
    japanese: /^[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u31F0-\u31FF\u4E00-\u9FAF\u3400-\u4DBF\u31F0-\u31FF]+$/,
    hiragana: /^[\u3040-\u309F]+$/,
    katakana: /^[\u30A0-\u30FF]+$/,
    kanji: /^[\u4E00-\u9FAF]+$/,
    chinese: /^[\u4E00-\u9FFF]+$/,
    includesSpace: /(?=.*[\s]+).*/,
    includesSpchar: /(?=.*[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/? \s]+).*/,
    id: /^[a-zA-Z0-9-_.]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/])[A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]{8,}$/,
    strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/].*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/])[A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]{12,}$/,
    email: /^[a-zA-Z0-9]+[a-zA-Z0-9.+]*[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+[a-zA-Z0-9.]*[a-zA-Z0-9]+$/,
    url: /^([a-z][a-z0-9+\-.]*):\/\/([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    phoneNumber: /^(?:\+?\d{1,3}-?)?(?:0\d{1,2}|\d{1,3})(?:-\d{1,4}){0,2}$/,
    postalCode: /^[a-zA-Z0-9\s-]+$/
  };

  /**
   * input에서 불필요한 문자(패턴에 어긋나는 문자)를 제거하기 위한 정규표현식 모음
   *
   * @static
   * @type {Object<string, RegExp>}
   */
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

  /**
   * if 문 형태의 체이닝을 위해 조건 객체를 생성합니다.
   *
   * @returns {JConditionForInput} 조건 객체
   */
  if() {
    this.condition = new JConditionForInput(this);
    return this.condition;
  }

  /**
   * focusout 이벤트 발생 시 report()를 자동 호출하는 함수 생성
   *
   * @returns {Function} focusout 시 호출될 함수
   */
  focusoutReportEvent = () => {
    return () => {
      this.report();
    };
  };

  /**
   * input 이벤트가 발생할 때, 특정 pattern에 매칭되는 문자를 제거하고 fn을 호출하는 이벤트를 반환
   *
   * @param {RegExp} pattern - 제거하려는 문자 패턴
   * @param {Function} fn - 제거 후 호출할 콜백
   * @returns {Function} input 이벤트 핸들러
   */
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

  /**
   * 필수 입력(required) 속성을 설정합니다.
   *
   * @param {boolean} [bool=true] - true면 required, false면 해제
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setRequired(bool = true) {
    if (this.enable !== true) return this;
    this.element.required = bool;
    return this;
  }

  /**
   * 사용자 정의 메시지를 설정하여 reportValidity() 시 표시되도록 합니다.
   *
   * @param {string} [message=''] - 표시할 사용자 정의 메시지
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setReportMessage(message = '') {
    if (this.enable !== true) return this;
    this.element.setCustomValidity(message);
    return this;
  }

  /**
   * 해당 input의 유효성 검사 결과(reportValidity)를 UI에 표시합니다.
   *
   * @returns {boolean} 유효하면 true, 아니면 false
   */
  reportValidity() {
    if (this.enable !== true) return this;
    return this.element.reportValidity();
  }

  /**
   * 해당 input의 유효성 검사(checkValidity) 결과를 반환합니다.
   *
   * @returns {boolean} 유효하면 true, 아니면 false
   */
  checkValidity() {
    if (this.enable !== true) return this;
    return this.element.checkValidity();
  }

  /**
   * HTML pattern 속성을 설정합니다.
   *
   * @param {string|RegExp} pattern - 유효성 검사를 위한 정규표현식 문자열
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setPattern(pattern) {
    if (this.enable !== true) return this;
    this.element.pattern = pattern;
    return this;
  }

  /**
   * 미리 정의된 number 정규식을 element.pattern에 설정합니다.
   *
   * @returns {this} 체이닝을 위해 현재 객체 반환
   */
  setNumberCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.number;
    return this;
  }

  /**
   * 영어 알파벳(대/소문자)만 허용하는 정규식 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this)를 반환하여 메서드 체이닝을 지원합니다.
   */
  setEnglishCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.english;
    return this;
  }

  /**
   * 소문자만 허용하는 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setLowercaseCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.lowercase;
    return this;
  }

  /**
   * 대문자만 허용하는 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setUppercaseCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.uppercase;
    return this;
  }

  /**
   * 한글(가-힣)만 허용하는 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setKoreanCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.korean;
    return this;
  }

  /**
   * 일본어(히라가나, 가타카나, 한자 등)를 허용하는 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setJapaneseCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.japanese;
    return this;
  }

  /**
   * 히라가나만 허용하는 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setHiraganaCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.hiragana;
    return this;
  }

  /**
   * 가타카나만 허용하는 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setKatakanaCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.katakana;
    return this;
  }

  /**
   * 한자(간지)만 허용하는 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setKanjiCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.kanji;
    return this;
  }

  /**
   * 중국어만 허용하는 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setChineseCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.chinese;
    return this;
  }

  /**
   * 공백(스페이스 포함)을 허용하는 패턴(공백 존재 여부를 체크)으로 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setIncludesSpaceCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.includesSpace;
    return this;
  }

  /**
   * 특수문자를 포함하는지 체크하는 패턴으로 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setIncludesSpcharCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.includesSpchar;
    return this;
  }

  /**
   * ID 생성 시 사용하는 패턴을 설정합니다(영문, 숫자, _, -, .).
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setIdCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.id;
    return this;
  }

  /**
   * 8자리 이상의 비밀번호(영대소문자, 숫자, 특수문자 포함)를 체크하는 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setPasswordCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.password;
    return this;
  }

  /**
   * 12자리 이상의 강력한 비밀번호(영대소문자, 숫자, 특수문자 포함)를 체크하는 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setStrongPasswordCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.strongPassword;
    return this;
  }

  /**
   * 이메일 주소 형식을 체크하는 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setEmailCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.email;
    return this;
  }

  /**
   * URL 형식을 체크하는 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setUrlCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.url;
    return this;
  }

  /**
   * 전화번호 형식을 체크하는 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setPhoneNumberCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.phoneNumber;
    return this;
  }

  /**
   * 우편번호(영문/숫자/hypen) 형식을 체크하는 패턴을 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  setPostalCodeCheckPattern() {
    if (this.enable !== true) return this;
    this.element.pattern = JInput.pattern.postalCode;
    return this;
  }

  /**
   * 숫자만 입력할 수 있도록 하는 InputCheck 이벤트를 등록합니다.
   * (불필요한 문자를 제거)
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  allowNumberOnly(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.number, fn);
    return this;
  }

  /**
   * 영문만 입력할 수 있도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  allowEnglishOnly(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.english, fn);
    return this;
  }

  /**
   * 소문자만 입력할 수 있도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  allowLowercaseOnly(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.lowercase, fn);
    return this;
  }

  /**
   * 한글(가-힣)만 입력할 수 있도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  allowKoreanOnly(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.korean, fn);
    return this;
  }

  /**
   * 일본어(히라가나, 가타카나, 한자 등)만 입력하도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  allowJapaneseOnly(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.japanese, fn);
    return this;
  }

  /**
   * 히라가나만 입력할 수 있도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  allowHiraganaOnly(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.hiragana, fn);
    return this;
  }

  /**
   * 가타카나만 입력할 수 있도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  allowKatakanaOnly(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.katakana, fn);
    return this;
  }

  /**
   * 한자(간지)만 입력할 수 있도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  allowKanjiOnly(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.kanji, fn);
    return this;
  }

  /**
   * 중국어만 입력할 수 있도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  allowChineseOnly(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.chinese, fn);
    return this;
  }

  /**
   * 공백을 입력할 수 없도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  disallowSpace(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.notSpace, fn);
    return this;
  }

  /**
   * 특수문자를 입력할 수 없도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  disallowSpchar(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.notSpchar, fn);
    return this;
  }

  /**
   * 아이디 형식(영문, 숫자, _, -, .)만 입력할 수 있도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  allowIdPattern(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.id, fn);
    return this;
  }

  /**
   * 이메일 형식(영숫자 + 일부특수문자 + @ + .)만 입력할 수 있도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  allowEmailPattern(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.email, fn);
    return this;
  }

  /**
   * URL 형식만 입력할 수 있도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  allowUrlPattern(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.url, fn);
    return this;
  }

  /**
   * 전화번호 형식(국가번호+전화번호)만 입력할 수 있도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  allowPhoneNumberPattern(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.phoneNumber, fn);
    return this;
  }

  /**
   * 우편번호 형식만 입력할 수 있도록 하는 InputCheck 이벤트를 등록합니다.
   *
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  allowPostalCodePattern(fn) {
    if (this.enable !== true) return this;
    this.addInputCheckEvent(JInput.inputCheckPattern.postalCode, fn);
    return this;
  }

  /**
   * focusout 시 report()를 자동 호출하도록 이벤트를 등록합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  addFocusoutReportEvent() {
    if (this.enable !== true) return this;
    this.addFocusoutEvent(this.focusoutReportEvent());
    return this;
  }

  /**
   * 지정된 pattern, 콜백 fn을 이용해 inputCheck 이벤트를 등록합니다.
   *
   * @param {RegExp} pattern - 제거할 문자 패턴
   * @param {Function} fn - 제거 후 콜백 함수
   * @returns {this} 현재 객체(this) 반환
   */
  addInputCheckEvent(pattern, fn) {
    if (this.enable !== true) return this;
    this.addInputEvent(this.inputCheckEvent(pattern, fn));
    return this;
  }

  /**
   * focusoutReportEvent를 제거합니다.
   *
   * @returns {this} 현재 객체(this) 반환
   */
  removeFocusoutReportEvent() {
    if (this.enable !== true) return this;
    this.removeFocusoutEvent(this.focusoutReportEvent());
    return this;
  }

  /**
   * 지정된 pattern과 fn을 이용해 등록한 inputCheck 이벤트를 제거합니다.
   *
   * @param {RegExp} pattern - 제거할 문자 패턴
   * @param {Function} fn - 제거 후 콜백 함수(식별자)
   * @returns {this} 현재 객체(this) 반환
   */
  removeInputCheckEvent(pattern, fn) {
    if (this.enable !== true) return this;
    this.removeInputEvent(this.inputCheckEvent(pattern, fn));
    return this;
  }
}

/**
 * @classdesc radio 타입의 input을 래핑한 클래스.
 *
 * @class JRadio
 * @extends {JInput}
 */
class JRadio extends JInput {
  /**
   * 내부적으로 type을 'radio'로 지정
   * @type {string}
   */
  type = 'radio';

  /**
   * radio 버튼을 체크/체크해제합니다.
   *
   * @param {boolean} [bool=true] - 체크 여부(true면 체크)
   * @returns {this} 현재 객체(this)를 반환 (체이닝 지원)
   */
  check(bool = true) {
    this.element.checked = bool;
    return this;
  }

  /**
   * radio 버튼이 체크 상태인지 반환합니다.
   *
   * @returns {boolean} 체크되어 있으면 true, 아니면 false
   */
  isChecked() {
    return this.element.checked;
  }
}

/**
 * @classdesc checkbox 타입의 input을 래핑한 클래스.
 *
 * @class JCheckbox
 * @extends {JInput}
 */
class JCheckbox extends JInput {
  /**
   * 내부적으로 type을 'checkbox'로 지정
   * @type {string}
   */
  type = 'checkbox';

  /**
   * 체크박스를 체크/체크해제합니다.
   *
   * @param {boolean} [bool=true] - 체크 여부(true면 체크)
   * @returns {this} 현재 객체(this)를 반환 (체이닝 지원)
   */
  check(bool = true) {
    if (this.enable !== true) return this;
    this.element.checked = bool;
    return this;
  }

  /**
   * 체크박스가 체크 상태인지 반환합니다.
   *
   * @returns {boolean} 체크되어 있으면 true, 아니면 false
   */
  isChecked() {
    return this.element.checked;
  }
}

/**
 * @classdesc button 타입의 input을 래핑한 클래스.
 *
 * @class JInputButton
 * @extends {JInput}
 */
class JInputButton extends JInput {
  /**
   * 내부적으로 type을 'button'으로 지정
   * @type {string}
   */
  type = 'button';
}

/**
 * @classdesc search 타입의 input을 래핑한 클래스.
 * HTML5의 검색형 input 기능(list와 datalist 등) 사용 시 편의 메서드 제공.
 *
 * @class JSearch
 * @extends {JInput}
 */
class JSearch extends JInput {
  /**
   * 내부적으로 type을 'search'로 지정
   * @type {string}
   */
  type = 'search';

  /**
   * 검색 input에 list 속성을 설정합니다.
   *
   * @param {string} listId - 연결할 datalist의 id
   * @returns {this} 현재 객체(this)를 반환 (체이닝 지원)
   */
  setList(listId) {
    if (this.enable !== true) return this;
    this.element.list = listId;
    return this;
  }

  /**
   * 연결된 list(=datalist)의 id를 반환합니다.
   *
   * @returns {string} list 속성 값(datalist id)
   */
  getList() {
    return this.element.list;
  }
}

/**
 * @classdesc 숨김(hidden) 타입의 input을 래핑한 클래스.
 *
 * @class JHidden
 * @extends {JInput}
 */
class JHidden extends JInput {
  /**
   * 내부적으로 type을 'hidden'으로 지정
   * @type {string}
   */
  type = 'hidden';
}

/**
 * @classdesc 일반 텍스트 타입의 input을 래핑한 클래스.
 *
 * @class JText
 * @extends {JInput}
 */
class JText extends JInput {
  /**
   * 내부적으로 type을 'text'로 지정
   * @type {string}
   */
  type = 'text';
}

/**
 * @classdesc 숫자(number) 타입의 input을 래핑한 클래스.
 *
 * @class JNumber
 * @extends {JInput}
 */
class JNumber extends JInput {
  /**
   * 내부적으로 type을 'number'로 지정
   * @type {string}
   */
  type = 'number';
}

/**
 * @classdesc 이메일(email) 타입의 input을 래핑한 클래스.
 * HTML5의 email 유효성 검사 등을 활용할 수 있습니다.
 *
 * @class JEmail
 * @extends {JInput}
 */
class JEmail extends JInput {
  /**
   * 내부적으로 type을 'email'로 지정
   * @type {string}
   */
  type = 'email';
}

/**
 * @classdesc date 타입의 input을 래핑한 클래스.
 * 날짜를 편리하게 다루기 위한 메서드들을 제공합니다.
 *
 * @class JDate
 * @extends {JInput}
 */
class JDate extends JInput {
  /**
   * 내부적으로 type을 'date'로 지정
   * @type {string}
   */
  type = 'date';

  /**
   * 날짜 관련 조건 검사를 위한 조건 객체를 생성합니다.
   *
   * @returns {JConditionForDate} 날짜 관련 검사를 수행할 JConditionForDate 객체
   */
  if() {
    this.condition = new JConditionForDate(this);
    return this.condition;
  }

  /**
   * 현재 input.value를 Date 객체로 변환한 뒤, getUTCDay() 값을 반환합니다.
   * (0 = 일요일, 1 = 월요일, ... 6 = 토요일)
   *
   * @returns {number} 요일 인덱스(0~6)
   */
  getDay() {
    return JWrap.stringToDate(this.element.value).getUTCDay();
  }

  /**
   * 현재 날짜(오늘)로 input.value를 설정합니다.
   *
   * @returns {this} 현재 객체(this) 반환(메서드 체이닝 용)
   */
  setToday() {
    if (this.enable !== true) return this;
    this.element.value = JWrap.today();
    return this;
  }

  /**
   * 기준 날짜에서 지정한 개월 수 이전으로 min 속성을 설정합니다.
   * 예) 3개월 전 날짜를 min으로 설정.
   *
   * @param {number} months - 몇 개월 전으로 설정할지
   * @param {string} [targetDate=JWrap.today()] - 기준 날짜(기본값: 오늘)
   * @returns {this} 현재 객체(this) 반환
   */
  disableMonthsAgo(months, targetDate = JWrap.today()) {
    if (this.enable !== true) return this;
    targetDate = JWrap.stringToDate(targetDate);
    let minDate = new Date(targetDate);
    minDate.setMonth(targetDate.getMonth() - months);

    this.element.setAttribute('min', JWrap.dateToString(minDate));
    return this;
  }

  /**
   * 기준 날짜에서 지정한 개월 수 이후로 max 속성을 설정합니다.
   * 예) 2개월 후 날짜를 max로 설정.
   *
   * @param {number} months - 몇 개월 후로 설정할지
   * @param {string} [targetDate=JWrap.today()] - 기준 날짜(기본값: 오늘)
   * @returns {this} 현재 객체(this) 반환
   */
  disableMonthsLater(months, targetDate = JWrap.today()) {
    if (this.enable !== true) return this;
    targetDate = JWrap.stringToDate(targetDate);
    let maxDate = new Date(targetDate);
    maxDate.setMonth(targetDate.getMonth() + months);

    this.element.setAttribute('max', JWrap.dateToString(maxDate));
    return this;
  }

  /**
   * 기준 날짜에서 지정한 일(days) 수 이전으로 min 속성을 설정합니다.
   * 예) 7일 전 날짜를 min으로 설정.
   *
   * @param {number} days - 몇 일 전으로 설정할지
   * @param {string} [targetDate=JWrap.today()] - 기준 날짜(기본값: 오늘)
   * @returns {this} 현재 객체(this) 반환
   */
  disableDaysAgo(days, targetDate = JWrap.today()) {
    if (this.enable !== true) return this;
    targetDate = JWrap.stringToDate(targetDate);
    let minDate = new Date(targetDate);
    minDate.setDate(targetDate.getDate() - days);

    this.element.setAttribute('min', JWrap.dateToString(minDate));
    return this;
  }

  /**
   * 기준 날짜에서 지정한 일(days) 수 이후로 max 속성을 설정합니다.
   * 예) 14일 후 날짜를 max로 설정.
   *
   * @param {number} days - 몇 일 후로 설정할지
   * @param {string} [targetDate=JWrap.today()] - 기준 날짜(기본값: 오늘)
   * @returns {this} 현재 객체(this) 반환
   */
  disableDaysLater(days, targetDate = JWrap.today()) {
    if (this.enable !== true) return this;
    targetDate = JWrap.stringToDate(targetDate);
    let maxDate = new Date(targetDate);
    maxDate.setDate(targetDate.getDate() + days);

    this.element.setAttribute('max', JWrap.dateToString(maxDate));
    return this;
  }

  /**
   * 현재 input.value를 days 일만큼 더합니다.
   * 예) 3일 뒤 날짜로 설정.
   *
   * @param {number} days - 며칠 더할지
   * @returns {this} 현재 객체(this) 반환
   */
  addDays(days) {
    if (this.enable !== true) return this;
    let targetDate = JWrap.stringToDate(this.element.value);
    targetDate.setDate(targetDate.getDate() + days);

    this.element.value = JWrap.dateToString(targetDate);
    return this;
  }

  /**
   * 현재 input.value에서 days 일만큼 뺍니다.
   * 예) 5일 전 날짜로 설정.
   *
   * @param {number} days - 며칠 뺄지
   * @returns {this} 현재 객체(this) 반환
   */
  subDays(days) {
    if (this.enable !== true) return this;
    let targetDate = JWrap.stringToDate(this.element.value);
    targetDate.setDate(targetDate.getDate() - days);

    this.element.value = JWrap.dateToString(targetDate);
    return this;
  }

  /**
   * 현재 input.value를 months 개월만큼 더합니다.
   * 예) 2개월 뒤 날짜로 설정.
   *
   * @param {number} months - 몇 개월 더할지
   * @returns {this} 현재 객체(this) 반환
   */
  addMonths(months) {
    if (this.enable !== true) return this;
    let targetDate = JWrap.stringToDate(this.element.value);
    targetDate.setMonth(targetDate.getMonth() + months);

    this.element.value = JWrap.dateToString(targetDate);
    return this;
  }

  /**
   * 현재 input.value에서 months 개월만큼 뺍니다.
   * 예) 1개월 전 날짜로 설정.
   *
   * @param {number} months - 몇 개월 뺄지
   * @returns {this} 현재 객체(this) 반환
   */
  subMonths(months) {
    if (this.enable !== true) return this;
    let targetDate = JWrap.stringToDate(this.element.value);
    targetDate.setMonth(targetDate.getMonth() - months);

    this.element.value = JWrap.dateToString(targetDate);
    return this;
  }
}

/**
 * @classdesc time 타입의 input을 래핑한 클래스.
 * 시간(HH:MM) 데이터를 편리하게 다루기 위한 메서드를 제공합니다.
 *
 * @class JTime
 * @extends {JInput}
 */
class JTime extends JInput {
  /**
   * 내부적으로 type을 'time'으로 지정
   * @type {string}
   */
  type = 'time';

  /**
   * 시간 관련 조건 검사를 위한 condition 객체를 생성합니다.
   *
   * @returns {JConditionForTime} 시간 관련 검사를 수행할 JConditionForTime 객체
   */
  if() {
    this.condition = new JConditionForTime(this);
    return this.condition;
  }

  /**
   * time input의 value를 설정합니다.
   * 값이 주어지지 않으면 현재 시각(JWrap.time())이 기본으로 설정됩니다.
   *
   * @param {string} [time] - 설정할 시간(HH:MM). 미지정 시 현재 시각으로 설정
   * @returns {this} 현재 객체(this) (체이닝 가능)
   */
  setTime(time) {
    if (this.enable !== true) return this;
    if (time) {
      this.element.value = time;
    } else {
      this.element.value = JWrap.time();
    }
    return this;
  }

  /**
   * 현재 time에서 hours만큼 시간을 더합니다.
   *
   * @param {number} hours - 더할 시간(예: 2면 +2시간)
   * @returns {this} 현재 객체(this) (체이닝 가능)
   */
  addHours(hours) {
    if (this.enable !== true) return this;
    const standardDate = new Date(Date.parse('2000-01-01'));

    const inputTime = new Date(standardDate);
    let [selectedHours, selectedMinutes] = this.element.value.split(':');
    inputTime.setHours(Number(selectedHours) + hours, selectedMinutes, 0, 0);

    this.element.value = `${inputTime.getHours()}:${inputTime.getMinutes()}`;
    return this;
  }

  /**
   * 현재 time에서 hours만큼 시간을 뺍니다.
   *
   * @param {number} hours - 뺄 시간(예: 1이면 -1시간)
   * @returns {this} 현재 객체(this) (체이닝 가능)
   */
  subHours(hours) {
    if (this.enable !== true) return this;
    const standardDate = new Date(Date.parse('2000-01-01'));

    const inputTime = new Date(standardDate);
    let [selectedHours, selectedMinutes] = this.element.value.split(':');
    inputTime.setHours(Number(selectedHours) - hours, selectedMinutes, 0, 0);

    this.element.value = `${inputTime.getHours()}:${inputTime.getMinutes()}`;
    return this;
  }

  /**
   * 현재 time에서 minutes만큼 분을 더합니다.
   *
   * @param {number} minutes - 더할 분(예: 30이면 +30분)
   * @returns {this} 현재 객체(this) (체이닝 가능)
   */
  addMinutes(minutes) {
    if (this.enable !== true) return this;
    const standardDate = new Date(Date.parse('2000-01-01'));

    const inputTime = new Date(standardDate);
    let [selectedHours, selectedMinutes] = this.element.value.split(':');
    inputTime.setHours(Number(selectedHours), Number(selectedMinutes) + minutes, 0, 0);

    this.element.value = `${inputTime.getHours()}:${inputTime.getMinutes()}`;
    return this;
  }

  /**
   * 현재 time에서 minutes만큼 분을 뺍니다.
   *
   * @param {number} minutes - 뺄 분(예: 15이면 -15분)
   * @returns {this} 현재 객체(this) (체이닝 가능)
   */
  subMinutes(minutes) {
    if (this.enable !== true) return this;
    const standardDate = new Date(Date.parse('2000-01-01'));

    const inputTime = new Date(standardDate);
    let [selectedHours, selectedMinutes] = this.element.value.split(':');
    inputTime.setHours(Number(selectedHours), Number(selectedMinutes) - minutes, 0, 0);

    this.element.value = `${inputTime.getHours()}:${inputTime.getMinutes()}`;
    return this;
  }
}

/**
 * @classdesc file 타입의 input을 래핑한 클래스.
 * 파일 업로드 및 관련 검사를 쉽게 할 수 있도록 합니다.
 *
 * @class JFile
 * @extends {JInput}
 */
class JFile extends JInput {
  /**
   * 내부적으로 type을 'file'로 지정
   * @type {string}
   */
  type = 'file';

  /**
   * 파일 관련 검사를 위한 condition 객체를 생성합니다.
   *
   * @returns {JConditionForFile} 파일 관련 검사를 수행할 JConditionForFile 객체
   */
  if() {
    this.condition = new JConditionForFile(this);
    return this.condition;
  }
}

/**
 * @classdesc color 타입의 input을 래핑한 클래스.
 * HTML5 색상 선택(color) 기능을 편리하게 사용할 수 있습니다.
 *
 * @class JColor
 * @extends {JInput}
 */
class JColor extends JInput {
  /**
   * 내부적으로 type을 'color'로 지정
   * @type {string}
   */
  type = 'color';
}

/**
 * @classdesc range 타입의 input을 래핑한 클래스.
 * 슬라이더 등 범위 지정 기능을 편리하게 사용하기 위한 메서드를 제공합니다.
 *
 * @class JRange
 * @extends {JInput}
 */
class JRange extends JInput {
  /**
   * 내부적으로 type을 'range'로 지정
   * @type {string}
   */
  type = 'range';
}

/**
 * @classdesc 여러 개의 DOM 요소를 동시에 래핑하여 일괄 처리(텍스트 설정, 값 설정 등)를 쉽게 하는 클래스
 *
 * @class JElements
 * @extends {JObject}
 */
class JElements extends JObject {
  /**
   * 내부적으로 관리할 다수의 DOM Element 목록
   * @type {NodeList|Element[]}
   */
  elements;

  /**
   * 생성자
   *
   * @constructor
   * @param {NodeList|Element[]} elements - 다수의 DOM 요소 목록
   * @throws {JNullPointerError} elements가 null/undefined일 때
   */
  constructor(elements) {
    if (!elements) {
      throw new JNullPointerError();
    }
    super();
    this.elements = elements;
  }

  /**
   * 다양한 인자를 통해 JElements를 생성합니다.
   *
   * @static
   * @param {*} arg1 - parentId이거나 name, 등등...
   * @param {*} arg2 - 추가 파라미터
   * @returns {JElements} 생성된 JElements 객체
   */
  static from(arg1, arg2) {
    if (arg1 && arg2) {
      return this.select(arg1, arg2);
    } else {
      return this.get(arg1);
    }
  }

  /**
   * document.getElementsByName()를 이용해 JElements를 생성합니다.
   *
   * @static
   * @param {string} name - name 속성값
   * @returns {JElements} 해당 name을 가진 요소들을 래핑한 JElements
   * @throws {JElementNameError} 해당 name의 요소가 하나도 없을 때
   * @throws {JElementTagNameError} this.tagName과 실제 tagName이 다를 때
   * @throws {JElementTypeError} this.type과 실제 type이 다를 때
   */
  static get(name) {
    let elements = document.getElementsByName(name);
    if (elements.length == 0) {
      throw new JElementNameError();
    }
    let element = elements[0];
    if (this.tagName) {
      if (element.tagName !== this.tagName) {
        throw new JElementTagNameError();
      }
    }
    if (this.type) {
      if (element.type !== this.type) {
        throw new JElementTypeError();
      }
    }
    return new this(elements);
  }

  /**
   * 특정 부모 요소 아래에서 name 속성으로 찾은 요소들을 JElements로 래핑합니다.
   *
   * @static
   * @param {string} parentId - 부모 요소의 id
   * @param {string} name - name 속성값
   * @returns {JElements} 찾은 요소들을 래핑한 JElements
   * @throws {JElementIdError} parentId에 해당하는 요소가 없을 때
   * @throws {JElementNameError} name에 해당하는 자식 요소가 없을 때
   * @throws {JElementTagNameError} this.tagName과 실제 tagName이 다를 때
   * @throws {JElementTypeError} this.type과 실제 type이 다를 때
   */
  static select(parentId, name) {
    let parentElement = document.getElementById(parentId);
    if (!parentElement) {
      throw new JElementIdError();
    }
    let elements = Array.from(
      parentElement.querySelectorAll(`[name="${name}"]`),
    );
    if (elements.length === 0) {
      throw new JElementNameError();
    }
    let element = elements[0];
    if (this.tagName && element.tagName !== this.tagName) {
      throw new JElementTagNameError();
    }
    if (this.type && element.type !== this.type) {
      throw new JElementTypeError();
    }
    return new this(elements);
  }

  /**
   * 내부 elements에 대해 콜백 함수를 순차 실행합니다.
   *
   * @param {Function} fn - 각 요소를 인자로 받는 콜백
   * @returns {this} 현재 객체(this) (메서드 체이닝)
   * @throws {JTypeError} fn이 함수가 아닐 때
   */
  foreach(fn) {
    if (typeof fn === 'function') {
      for (let element of this.elements) {
        fn(element);
      }
    } else {
      throw new JTypeError();
    }
    return this;
  }

  /**
   * if ~ then 형태의 조건 처리를 위해 조건 객체를 생성합니다.
   *
   * @returns {JConditionForElements} 요소들을 기반으로 검사를 수행할 조건 객체
   */
  if() {
    this.condition = new JConditionForElements(this);
    return this.condition;
  }

  /**
   * 조건 객체에 패스 옵션을 설정합니다.
   *
   * @param {number} number - 패스할 최소 개수
   * @returns {this} 현재 객체(this)
   */
  setPassOption(number) {
    this.condition.setPassOption(number);
    return this;
  }

  /**
   * 각 요소에 대해 setText를 호출합니다.
   *
   * @param {string} text - 설정할 텍스트
   * @returns {this} 현재 객체(this)
   */
  setText(text) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).setText(text);
    });
    return this;
  }

  /**
   * 각 요소에 대해 setValue를 호출합니다.
   *
   * @param {string} value - 설정할 값
   * @returns {this} 현재 객체(this)
   */
  setValue(value) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).setValue(value);
    });
    return this;
  }

  /**
   * 각 요소에 대해 replace를 호출합니다.
   * (실제로는 치환 결과를 대입해야 적용됨)
   *
   * @param {string|RegExp} value - 치환 대상
   * @returns {this} 현재 객체(this)
   */
  replace(value) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).replace(value);
    });
    return this;
  }

  /**
   * 각 요소에 대해 replaceAll을 호출합니다.
   * (실제로는 치환 결과를 대입해야 적용됨)
   *
   * @param {string|RegExp} value - 치환 대상
   * @returns {this} 현재 객체(this)
   */
  replaceAll(value) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).replaceAll(value);
    });
    return this;
  }

  /**
   * 각 요소의 max 속성을 설정합니다.
   *
   * @param {string} value - 설정할 max 값
   * @returns {this} 현재 객체(this)
   */
  setMax(value) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).setMax(value);
    });
    return this;
  }

  /**
   * 각 요소의 min 속성을 설정합니다.
   *
   * @param {string} value - 설정할 min 값
   * @returns {this} 현재 객체(this)
   */
  setMin(value) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).setMin(value);
    });
    return this;
  }

  /**
   * 각 요소의 step 속성을 설정합니다.
   *
   * @param {string|number} value - 설정할 step 값
   * @returns {this} 현재 객체(this)
   */
  setStep(value) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).setStep(value);
    });
    return this;
  }

  /**
   * (예시에만 존재하는 이름) 각 요소에 대해 function(...)을 호출
   * 코드 상 function은 정의가 없으므로 주석 보완 시 실제 기능 설명 필요
   *
   * @param {*} data - 전달할 데이터
   * @returns {this} 현재 객체(this)
   */
  function(data) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).function(data);
    });
    return this;
  }

  /**
   * 각 요소의 innerHTML을 설정합니다.
   *
   * @param {string} html - 설정할 HTML
   * @returns {this} 현재 객체(this)
   */
  setInnerHtml(html) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).setInnerHtml(html);
    });
    return this;
  }

  /**
   * 각 요소의 outerHTML을 설정합니다.
   *
   * @param {string} html - 설정할 HTML
   * @returns {this} 현재 객체(this)
   */
  setOuterHtml(html) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).setOuterHtml(html);
    });
    return this;
  }

  /**
   * 각 요소의 이전 위치(beforebegin)에 html을 삽입합니다.
   *
   * @param {string} html - 삽입할 HTML
   * @returns {this} 현재 객체(this)
   */
  insertBeforebeginHtml(html) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).insertBeforebeginHtml(html);
    });
    return this;
  }

  /**
   * 각 요소 내부의 첫 위치(afterbegin)에 html을 삽입합니다.
   *
   * @param {string} html - 삽입할 HTML
   * @returns {this} 현재 객체(this)
   */
  insertAfterbeginHtml(html) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).insertAfterbeginHtml(html);
    });
    return this;
  }

  /**
   * 각 요소 바로 뒤(afterend)에 html을 삽입합니다.
   *
   * @param {string} html - 삽입할 HTML
   * @returns {this} 현재 객체(this)
   */
  insertAfterendHtml(html) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).insertAfterendHtml(html);
    });
    return this;
  }

  /**
   * 각 요소의 자식 중 child 노드를 제거합니다.
   *
   * @param {Node} child - 제거할 자식 노드
   * @returns {this} 현재 객체(this)
   */
  removeChild(child) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).removeChild(child);
    });
    return this;
  }

  /**
   * 각 요소의 자식에서 oldChild를 newChild로 교체합니다.
   *
   * @param {Node} newChild - 새 노드
   * @param {Node} oldChild - 교체할 기존 노드
   * @returns {this} 현재 객체(this)
   */
  replaceChild(newChild, oldChild) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).replaceChild(newChild, oldChild);
    });
    return this;
  }

  /**
   * 각 요소에 child를 appendChild로 추가합니다.
   *
   * @param {Node|JElement} child - 추가할 노드(또는 래핑된 JElement)
   * @returns {this} 현재 객체(this)
   */
  appendChild(child) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).appendChild(child);
    });
    return this;
  }

  /**
   * 각 요소에 disabled 속성을 설정/해제합니다.
   *
   * @param {boolean} _bool - true면 disabled, false면 해제
   * @returns {this} 현재 객체(this)
   */
  setDisabled(_bool) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).setDisabled(_bool);
    });
    return this;
  }

  /**
   * 각 요소에 readOnly 속성을 설정/해제합니다.
   *
   * @param {boolean} _bool - true면 readOnly, false면 해제
   * @returns {this} 현재 객체(this)
   */
  setReadonly(_bool) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).setReadonly(_bool);
    });
    return this;
  }

  /**
   * 각 요소에 display:none 스타일을 적용합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  addDisplayNone() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addDisplayNone();
    });
    return this;
  }

  /**
   * 각 요소의 display:none 스타일을 제거합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  removeDisplayNone() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).removeDisplayNone();
    });
    return this;
  }

  /**
   * 각 요소에 클래스를 추가합니다.
   *
   * @param {string} className - 추가할 클래스명
   * @returns {this} 현재 객체(this)
   */
  addClass(className) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addClass(className);
    });
    return this;
  }

  /**
   * 각 요소에서 클래스를 제거합니다.
   *
   * @param {string} className - 제거할 클래스명
   * @returns {this} 현재 객체(this)
   */
  removeClass(className) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).removeClass(className);
    });
    return this;
  }

  /**
   * 각 요소에 이벤트를 등록합니다.
   *
   * @param {string} event - 이벤트명
   * @param {Function} fn - 이벤트 핸들러
   * @param {boolean|AddEventListenerOptions} [option] - 옵션
   * @returns {this} 현재 객체(this)
   */
  addEvent(event, fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addEvent(event, fn, option);
    });
    return this;
  }

  // (이하 addKeyupEvent, addKeypressEvent 등은 같은 패턴이므로 주석만 달아두었습니다.)

  /**
   * 각 요소에 keyup 이벤트를 등록합니다.
   *
   * @param {Function} fn - keyup 이벤트 핸들러
   * @param {boolean|AddEventListenerOptions} [option] - 옵션
   * @returns {this} 현재 객체(this)
   */
  addKeyupEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addKeyupEvent(fn, option);
    });
    return this;
  }

  /**
   * keypress 이벤트를 등록합니다.
   *
   * @param {Function} fn - keypress 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addKeypressEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addKeypressEvent(fn, option);
    });
    return this;
  }

  /**
   * keydown 이벤트를 등록합니다.
   *
   * @param {Function} fn - keydown 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addKeydownEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addKeydownEvent(fn, option);
    });
    return this;
  }

  /**
   * click 이벤트를 등록합니다.
   *
   * @param {Function} fn - click 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addClickEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addClickEvent(fn, option);
    });
    return this;
  }

  /**
   * dblclick 이벤트를 등록합니다.
   *
   * @param {Function} fn - dblclick 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addDblclickEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addDblclickEvent(fn, option);
    });
    return this;
  }

  /**
   * drag 이벤트를 등록합니다.
   *
   * @param {Function} fn - drag 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addDragEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addDragEvent(fn, option);
    });
    return this;
  }

  /**
   * dragstart 이벤트를 등록합니다.
   *
   * @param {Function} fn - dragstart 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addDragstartEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addDragstartEvent(fn, option);
    });
    return this;
  }

  /**
   * dragend 이벤트를 등록합니다.
   *
   * @param {Function} fn - dragend 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addDragendEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addDragendEvent(fn, option);
    });
    return this;
  }

  /**
   * dragenter 이벤트를 등록합니다.
   *
   * @param {Function} fn - dragenter 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addDragenterEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addDragenterEvent(fn, option);
    });
    return this;
  }

  /**
   * dragleave 이벤트를 등록합니다.
   *
   * @param {Function} fn - dragleave 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addDragleaveEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addDragleaveEvent(fn, option);
    });
    return this;
  }

  /**
   * dragover 이벤트를 등록합니다.
   *
   * @param {Function} fn - dragover 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addDragoverEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addDragoverEvent(fn, option);
    });
    return this;
  }

  /**
   * touchstart 이벤트를 등록합니다.
   *
   * @param {Function} fn - touchstart 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addTouchstartEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addTouchstartEvent(fn, option);
    });
    return this;
  }

  /**
   * touchmove 이벤트를 등록합니다.
   *
   * @param {Function} fn - touchmove 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addTouchmoveEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addTouchmoveEvent(fn, option);
    });
    return this;
  }

  /**
   * touchend 이벤트를 등록합니다.
   *
   * @param {Function} fn - touchend 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addTouchendEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addTouchendEvent(fn, option);
    });
    return this;
  }

  /**
   * touchcancel 이벤트를 등록합니다.
   *
   * @param {Function} fn - touchcancel 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addTouchcancelEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addTouchcancelEvent(fn, option);
    });
    return this;
  }

  /**
   * input 이벤트를 등록합니다.
   *
   * @param {Function} fn - input 발생 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addInputEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addInputEvent(fn, option);
    });
    return this;
  }

  /**
   * change 이벤트를 등록합니다.
   *
   * @param {Function} fn - change 발생 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addChangeEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addChangeEvent(fn, option);
    });
    return this;
  }

  /**
   * focus 이벤트를 등록합니다.
   *
   * @param {Function} fn - focus 발생 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addFocusEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addFocusEvent(fn, option);
    });
    return this;
  }

  /**
   * focusin 이벤트를 등록합니다.
   *
   * @param {Function} fn - focusin 발생 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addFocusinEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addFocusinEvent(fn, option);
    });
    return this;
  }

  /**
   * focusout 이벤트를 등록합니다.
   *
   * @param {Function} fn - focusout 발생 시 호출될 콜백 함수
   * @param {boolean|AddEventListenerOptions} [option] - 이벤트 옵션
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addFocusoutEvent(fn, option) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addFocusoutEvent(fn, option);
    });
    return this;
  }

  /**
   * 각 요소에 focusoutReportEvent를 등록합니다.
   * (focusout 시 자동으로 report()를 호출)
   *
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addFocusoutReportEvent() {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addFocusoutReportEvent();
    });
    return this;
  }

  /**
   * 각 요소에 대해 inputCheck 이벤트를 등록합니다.
   * (input 발생 시 특정 정규식 패턴을 제거하고 콜백 함수 실행)
   *
   * @param {RegExp} pattern - 제거할 문자 패턴
   * @param {Function} fn - 제거 후 호출될 콜백 함수
   * @returns {this} 현재 객체(this), 메서드 체이닝 가능
   */
  addInputCheckEvent(pattern, fn) {
    if (this.result !== true) return this;
    this.foreach((element) => {
      new JElement(element).addInputCheckEvent(pattern, fn);
    });
    return this;
  }
}

/**
 * @classdesc 다수의 input 요소들을 한꺼번에 제어하기 위한 클래스.
 * 기본적으로 'INPUT' 태그를 대상으로 합니다.
 *
 * @class JInputs
 * @extends {JElements}
 */
class JInputs extends JElements {
  /**
   * 내부적으로 tagName을 'INPUT'으로 지정
   * @type {string}
   */
  tagName = 'INPUT';

  /**
   * 여러 input 요소에 대한 조건 검사를 위한 객체를 생성합니다.
   *
   * @returns {JConditionForInputs} input들에 대한 조건 검사를 수행할 객체
   */
  if() {
    this.condition = new JConditionForInputs(this);
    return this.condition;
  }
}

/**
 * @classdesc 다수의 radio 요소를 한꺼번에 제어하기 위한 클래스.
 * 기본적으로 'INPUT[type="radio"]'를 대상으로 합니다.
 *
 * @class JRadios
 * @extends {JInputs}
 */
class JRadios extends JInputs {
  /**
   * 내부적으로 type을 'radio'로 지정
   * @type {string}
   */
  type = 'radio';

  /**
   * 여러 radio 요소에 대한 조건 검사를 위한 객체를 생성합니다.
   *
   * @returns {JConditionForRadios} radio들에 대한 조건 검사를 수행할 객체
   */
  if() {
    this.condition = new JConditionForRadios(this);
    return this.condition;
  }

  /**
   * 특정 인덱스의 radio를 체크/체크해제합니다.
   *
   * @param {number} [index=0] - 체크할 radio의 인덱스
   * @param {boolean} [bool=true] - true면 체크, false면 해제
   * @returns {this} 현재 객체(this) (체이닝 가능)
   */
  check(index = 0, bool = true) {
    if (this.enable !== true) return this;
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      if (i === index) {
        element.checked = bool;
        break;
      }
    }
    return this;
  }

  /**
   * 특정 value를 가진 radio를 체크/체크해제합니다.
   *
   * @param {string} value - 체크할 radio의 value
   * @param {boolean} [bool=true] - true면 체크, false면 해제
   * @returns {this} 현재 객체(this) (체이닝 가능)
   */
  checkByValue(value, bool = true) {
    if (this.enable !== true) return this;
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      if (element.value == value) {
        element.checked = bool;
        break;
      }
    }
    return this;
  }

  /**
   * 체크된 radio의 value를 반환합니다.
   *
   * @returns {string|undefined} 체크된 radio의 value. 없으면 undefined
   */
  getCheckedValue() {
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      if (element.checked) {
        return element.value;
      }
    }
  }
}

/**
 * @classdesc 다수의 checkbox 요소를 한꺼번에 제어하기 위한 클래스.
 * 기본적으로 'INPUT[type="checkbox"]'를 대상으로 합니다.
 *
 * @class JCheckboxes
 * @extends {JInputs}
 */
class JCheckboxes extends JInputs {
  /**
   * 내부적으로 type을 'checkbox'로 지정
   * @type {string}
   */
  type = 'checkbox';

  /**
   * 여러 checkbox 요소에 대한 조건 검사를 위한 객체를 생성합니다.
   *
   * @returns {JConditionForCheckboxes} checkbox들에 대한 조건 검사를 수행할 객체
   */
  if() {
    this.condition = new JConditionForCheckboxes(this);
    return this.condition;
  }

  /**
   * 특정 인덱스의 checkbox를 체크/체크해제합니다.
   *
   * @param {number} [index=0] - 체크할 checkbox의 인덱스
   * @param {boolean} [bool=true] - true면 체크, false면 해제
   * @returns {this} 현재 객체(this) (체이닝 가능)
   */
  check(index = 0, bool = true) {
    if (this.enable !== true) return this;
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      if (i === index) {
        element.checked = bool;
      }
    }
    return this;
  }

  /**
   * 특정 value를 가진 checkbox를 체크/체크해제합니다.
   *
   * @param {string} value - 체크할 checkbox의 value
   * @param {boolean} [bool=true] - true면 체크, false면 해제
   * @returns {this} 현재 객체(this) (체이닝 가능)
   */
  checkByValue(value, bool = true) {
    if (this.enable !== true) return this;
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      if (element.value == value) {
        element.checked = bool;
      }
    }
    return this;
  }

  /**
   * 체크된 모든 checkbox의 value 배열을 반환합니다.
   *
   * @returns {string[]} 체크된 checkbox들의 value 목록
   */
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

  /**
   * 체크된 checkbox의 개수를 반환합니다.
   *
   * @returns {number} 체크된 checkbox 개수
   */
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

  /**
   * 체크된 checkbox들의 value를 숫자로 변환하여 모두 더한 값을 반환합니다.
   * (value가 숫자가 아닐 경우 무시)
   *
   * @returns {number} 체크된 value들의 합
   */
  getSumOfCheckedValues() {
    let sum = 0;
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      if (element.checked) {
        // isNaN(element.value)가 아니라 Number로 변환이 가능하면 더함
        if (!isNaN(element.value)) {
          sum += Number(element.value);
        }
      }
    }
    return sum;
  }

  /**
   * 모든 checkbox를 일괄 체크/체크해제합니다.
   *
   * @param {boolean} [bool=true] - true면 전부 체크, false면 전부 해제
   * @returns {this} 현재 객체(this) (체이닝 가능)
   */
  checkAll(bool = true) {
    if (this.enable !== true) return this;
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i];
      element.checked = bool;
    }
    return this;
  }
}

/**
 * @classdesc 다양한 논리 조건(and/or)을 조합하여 객체의 enable/disable 상태를 제어하는 클래스.
 *
 * @class JCondition
 */
class JCondition {
  /**
   * 대상 객체(JObject, JElement 등)를 참조합니다.
   * @type {JObject}
   */
  jobject;

  /**
   * 내부적인 조건 평가 결과를 저장합니다.
   * @type {boolean}
   */
  result = true;

  /**
   * 조건식을 구성하기 위해 임시로 보관할 항목 배열
   * @type {Array<boolean|string>}
   */
  conditions = [];

  /**
   * 생성자
   *
   * @constructor
   * @param {JObject} jobject - 조건을 적용할 대상 객체
   */
  constructor(jobject) {
    this.jobject = jobject;
  }

  /**
   * 현재 조건 결과(result)를 `&&`로 이어서 조건식을 구성합니다.
   *
   * @returns {this} 현재 JCondition 객체 (체이닝 가능)
   */
  and() {
    this.conditions.push(this.result);
    this.conditions.push("&&");
    return this;
  }

  /**
   * 현재 조건 결과(result)를 `||`로 이어서 조건식을 구성합니다.
   *
   * @returns {this} 현재 JCondition 객체 (체이닝 가능)
   */
  or() {
    this.conditions.push(this.result);
    this.conditions.push("||");
    return this;
  }

  /**
   * 조건식을 평가한 뒤, 참이면 대상 객체의 `enable`을 true로 설정하고,
   * 거짓이면 false로 설정합니다. 이후 조건식 배열을 초기화합니다.
   *
   * @returns {JObject} 조건 평가 후의 대상 객체 (enable 상태가 바뀔 수 있음)
   * @throws {JConditionError} eval 과정에서 오류 발생 시
   */
  then() {
    if (this.conditions.length > 0) {
      this.conditions.push(this.result);
      const conditionString = this.conditions.join(" ");
      try {
        if (eval(conditionString)) {
          this.result = true;
          this.jobject.enable = true;
        } else {
          this.result = false;
          this.jobject.enable = false;
        }
        this.conditions = [];
      } catch {
        throw new JConditionError();
      }
    } else {
      if (this.result === true) {
        this.jobject.enable = true;
      } else {
        this.jobject.enable = false;
      }
    }
    return this.jobject;
  }

  /**
   * 조건식을 평가한 뒤, 참이 아니면 대상 객체의 `enable`을 true로 설정하고,
   * 참이면 false로 설정합니다. (if-else 구문에서의 else와 유사)
   * 이후 조건식 배열을 초기화합니다.
   *
   * @returns {JObject} 조건 평가 후의 대상 객체 (enable 상태가 바뀔 수 있음)
   * @throws {JConditionError} eval 과정에서 오류 발생 시
   */
  else() {
    if (this.conditions.length > 0) {
      this.conditions.push(this.result);
      const conditionString = this.conditions.join(" ");
      try {
        if (!eval(conditionString)) {
          this.result = true;
          this.jobject.enable = true;
        } else {
          this.result = false;
          this.jobject.enable = false;
        }
        this.conditions = [];
      } catch {
        throw new JConditionError();
      }
    } else {
      if (this.result === false) {
        this.jobject.enable = true;
      } else {
        this.jobject.enable = false;
      }
    }
    return this.jobject;
  }
}

/**
 * @classdesc Input 요소에 대한 다양한 조건(빈 값, 일치, 범위 등)을 검사하기 위한 클래스.
 * JCondition을 확장하며, 주로 JInput과 함께 사용됩니다.
 *
 * @class JConditionForInput
 * @extends {JCondition}
 */
class JConditionForInput extends JCondition {
  /**
   * input이 비어있는지(value가 null이거나, trim 결과가 빈 문자열인지) 검사합니다.
   *
   * @returns {this} 현재 객체(this)를 반환하여 체이닝을 지원합니다.
   */
  isEmpty() {
    this.result = this.jobject.element.value == null 
      || this.jobject.element.value.trim() == '';
    return this;
  }

  /**
   * input이 비어있지 않은지 검사합니다.
   *
   * @returns {this} 현재 객체(this)를 반환 (체이닝 가능)
   */
  isNotEmpty() {
    this.isEmpty();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 특정 값과 일치하는지 검사합니다(===).
   *
   * @param {string} value - 비교할 값
   * @returns {this} 현재 객체(this)
   */
  isEqual(value) {
    this.result = this.jobject.element.value === value;
    return this;
  }

  /**
   * input value가 특정 값과 일치하지 않는지 검사합니다.
   *
   * @param {string} value - 비교할 값
   * @returns {this} 현재 객체(this)
   */
  isNotEqual(value) {
    this.isEqual(value);
    this.result = !this.result;
    return this;
  }

  /**
   * input value에 특정 문자열이 포함되어 있는지 확인합니다.
   *
   * @param {string} value - 포함 여부를 확인할 문자열
   * @returns {this} 현재 객체(this)
   */
  isIncludes(value) {
    this.result = this.jobject.element.value.includes(value);
    return this;
  }

  /**
   * input value가 특정 문자열을 포함하고 있지 않은지 확인합니다.
   *
   * @param {string} value - 포함 여부를 확인할 문자열
   * @returns {this} 현재 객체(this)
   */
  isNotIncludes(value) {
    this.isIncludes(value);
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 number보다 큰지 비교합니다(문자열 비교, 주의!).
   *
   * @param {string|number} number - 비교할 값(문자열이면 주의 필요)
   * @returns {this} 현재 객체(this)
   */
  isGreaterValue(number) {
    this.result = this.jobject.element.value > number;
    return this;
  }

  /**
   * input value가 number보다 작은지 비교합니다(문자열 비교, 주의!).
   *
   * @param {string|number} number - 비교할 값
   * @returns {this} 현재 객체(this)
   */
  isLessValue(number) {
    this.result = this.jobject.element.value < number;
    return this;
  }

  /**
   * input value의 길이가 number보다 긴지 검사합니다.
   *
   * @param {number} number - 길이 비교 대상
   * @returns {this} 현재 객체(this)
   */
  isGreaterLength(number) {
    this.result = this.jobject.element.value.length > number;
    return this;
  }

  /**
   * input value의 길이가 number보다 짧은지 검사합니다.
   *
   * @param {number} number - 길이 비교 대상
   * @returns {this} 현재 객체(this)
   */
  isLessLength(number) {
    this.result = this.jobject.element.value.length < number;
    return this;
  }

  /**
   * input value가 start 이상, end 이하인지(문자열 비교) 검사합니다.
   *
   * @param {string|number} start - 시작 범위
   * @param {string|number} end - 끝 범위
   * @returns {this} 현재 객체(this)
   */
  isValueBetween(start, end) {
    this.result = this.jobject.element.value >= start 
      && this.jobject.element.value <= end;
    return this;
  }

  /**
   * input value가 start 이상, end 이하 범위 밖인지(문자열 비교) 검사합니다.
   *
   * @param {string|number} start - 시작 범위
   * @param {string|number} end - 끝 범위
   * @returns {this} 현재 객체(this)
   */
  isNotValueBetween(start, end) {
    this.isValueBetween(start, end);
    this.result = !this.result;
    return this;
  }

  /**
   * input value의 길이가 start 이상, end 이하 범위인지 검사합니다.
   *
   * @param {number} start - 최소 길이
   * @param {number} end - 최대 길이
   * @returns {this} 현재 객체(this)
   */
  isLengthBetween(start, end) {
    this.result = (
      this.jobject.element.value.length >= start 
      && this.jobject.element.value.length <= end
    );
    return this;
  }

  /**
   * input value의 길이가 start 이상, end 이하 범위 밖인지 검사합니다.
   *
   * @param {number} start - 최소 길이
   * @param {number} end - 최대 길이
   * @returns {this} 현재 객체(this)
   */
  isNotLengthBetween(start, end) {
    this.isLengthBetween(start, end);
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 숫자인지 검사합니다.
   * (isNaN 결과를 반대로 체크)
   *
   * @returns {this} 현재 객체(this)
   */
  isNumber() {
    this.result = !isNaN(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 숫자가 아닌지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotNumber() {
    this.isNumber();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 영문(대소문자)만으로 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isOnlyEnglish() {
    this.result = JInput.pattern.english.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 영문(대소문자)만으로 구성되지 않았는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotOnlyEnglish() {
    this.isOnlyEnglish();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 소문자만으로 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isLowercase() {
    this.result = JInput.pattern.lowercase.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 소문자만으로 구성되지 않았는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotLowercase() {
    this.isLowercase();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 대문자만으로 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isUppercase() {
    this.result = JInput.pattern.uppercase.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 대문자만으로 구성되지 않았는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotUppercase() {
    this.isUppercase();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 한글(가-힣)만으로 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isOnlyKorean() {
    this.result = JInput.pattern.korean.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 한글(가-힣)만으로 구성되지 않았는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotOnlyKorean() {
    this.isOnlyKorean();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 일본어(히라가나, 가타카나, 한자 등)로만 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isOnlyJapanese() {
    this.result = JInput.pattern.japanese.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 일본어(히라가나, 가타카나, 한자 등)만으로 구성되지 않았는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotOnlyJapanese() {
    this.isOnlyJapanese();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 히라가나로만 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isOnlyHiragana() {
    this.result = JInput.pattern.hiragana.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 히라가나로만 구성되지 않았는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotOnlyHiragana() {
    this.isOnlyHiragana();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 가타카나로만 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isOnlyKatakana() {
    this.result = JInput.pattern.katakana.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 가타카나로만 구성되지 않았는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotOnlyKatakana() {
    this.isOnlyKatakana();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 한자로만 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isOnlyKanji() {
    this.result = JInput.pattern.kanji.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 한자로만 구성되지 않았는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotOnlyKanji() {
    this.isOnlyKanji();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 중국어 문자로만 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isOnlyChanese() {
    this.result = JInput.pattern.chinese.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 중국어 문자만으로 구성되지 않았는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotOnlyChanese() {
    this.isOnlyChanese();
    this.result = !this.result;
    return this;
  }

  /**
   * input value에 공백(스페이스)이 포함되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isIncludesSpace() {
    this.result = JInput.pattern.includesSpace.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value에 공백(스페이스)이 포함되어 있지 않은지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotIncludesSpace() {
    this.isIncludesSpace();
    this.result = !this.result;
    return this;
  }

  /**
   * input value에 특수문자가 포함되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isIncludesSpchar() {
    this.result = JInput.pattern.includesSpchar.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value에 특수문자가 포함되어 있지 않은지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotIncludesSpchar() {
    this.isIncludesSpchar();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 id 패턴(영문, 숫자, -, _, .)으로 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isId() {
    this.result = JInput.pattern.id.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 id 패턴(영문, 숫자, -, _, .)과 일치하지 않는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotId() {
    this.isId();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 최소 8자 이상의 영대소문자+숫자+특수문자를 모두 포함한 비밀번호인지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isPassword() {
    this.result = JInput.pattern.password.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 password 패턴에 부합하지 않는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotPassword() {
    this.isPassword();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 더 강력(12자 이상)의 비밀번호 형식인지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isStrongPassword() {
    this.result = JInput.pattern.strongPassword.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 강력한 비밀번호 형식에 맞지 않는지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotStrongPassword() {
    this.isStrongPassword();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 email 형식(영숫자 + @ + .)인지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isEmail() {
    this.result = JInput.pattern.email.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 email 형식이 아닌지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotEmail() {
    this.isEmail();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 URL 형식인지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isUrl() {
    this.result = JInput.pattern.url.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 URL 형식이 아닌지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotUrl() {
    this.isUrl();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 전화번호 형식인지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isPhoneNumber() {
    this.result = JInput.pattern.phoneNumber.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 전화번호 형식이 아닌지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotPhoneNumber() {
    this.isPhoneNumber();
    this.result = !this.result;
    return this;
  }

  /**
   * input value가 우편번호 형식(영숫자, 공백, 하이픈)인지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isPostalCode() {
    this.result = JInput.pattern.postalCode.test(this.jobject.element.value);
    return this;
  }

  /**
   * input value가 우편번호 형식이 아닌지 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotPostalCode() {
    this.isPostalCode();
    this.result = !this.result;
    return this;
  }

  /**
   * 커스텀 패턴을 받아 검사합니다. (조건에서 직접 정규표현식을 넘길 때 사용)
   *
   * @param {RegExp} pattern - 검사할 정규표현식
   * @returns {this} 현재 객체(this)
   */
  test(pattern) {
    if (this.enable !== true) return this;
    this.result = pattern.test(this.jobject.element.value);
    return this;
  }
}

/**
 * @classdesc date 타입의 input 값(예: 'YYYY-MM-DD')에 대해
 * 특정 일/개월 전후인지 검사하기 위한 클래스.
 * 
 * @class JConditionForDate
 * @extends {JCondition}
 */
class JConditionForDate extends JCondition {

  /**
   * 해당 input.value가 주어진 개월(months) 수 전인지 확인합니다.
   * (현재 날짜에서 months만큼 뺀 날짜보다 선택된 날짜(selectedDate)가 과거인지 검사)
   *
   * @param {number} months - 몇 개월 전인지
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isMonthsAgo(months) {
    const selectedDate = new Date(this.jobject.element.value);
    const currentDate = new Date();
    const referenceDate = new Date(currentDate);

    // 기준 날짜에서 months만큼 뺀 다음, 시/분/초/밀리초를 0으로 고정
    referenceDate.setMonth(currentDate.getMonth() - months);
    referenceDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    // referenceDate >= selectedDate 이면, 'selectedDate가 months 개월 전 날짜 또는 더 과거' 임
    this.result = referenceDate >= selectedDate;
    return this;
  }

  /**
   * 해당 input.value가 주어진 개월(months) 수 이후인지 확인합니다.
   * (현재 날짜에서 months만큼 더한 날짜보다 선택된 날짜(selectedDate)가 미래인지 검사)
   *
   * @param {number} months - 몇 개월 후인지
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isMonthsLater(months) {
    const selectedDate = new Date(this.jobject.element.value);
    const currentDate = new Date();
    const referenceDate = new Date(currentDate);

    // 기준 날짜에서 months만큼 더한 다음, 시/분/초/밀리초를 0으로 고정
    referenceDate.setMonth(currentDate.getMonth() + months);
    referenceDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    // referenceDate <= selectedDate 이면, 'selectedDate가 months 개월 후 날짜 또는 더 미래' 임
    this.result = referenceDate <= selectedDate;
    return this;
  }

  /**
   * 해당 input.value가 주어진 일(days) 수 전인지 확인합니다.
   * (현재 날짜에서 days만큼 뺀 날짜보다 더 과거인지 검사)
   *
   * @param {number} days - 몇 일 전인지
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isDaysAgo(days) {
    const selectedDate = new Date(this.jobject.element.value);
    const currentDate = new Date();
    const referenceDate = new Date(currentDate);

    // 기준 날짜에서 days만큼 뺀 다음, 시/분/초/밀리초를 0으로 고정
    referenceDate.setDate(currentDate.getDate() - days);
    referenceDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    // referenceDate >= selectedDate
    this.result = referenceDate >= selectedDate;
    return this;
  }

  /**
   * 해당 input.value가 주어진 일(days) 수 이후인지 확인합니다.
   * (현재 날짜에서 days만큼 더한 날짜보다 더 미래인지 검사)
   *
   * @param {number} days - 몇 일 후인지
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isDaysLater(days) {
    const selectedDate = new Date(this.jobject.element.value);
    const currentDate = new Date();
    const referenceDate = new Date(currentDate);

    // 기준 날짜에서 days만큼 더한 다음, 시/분/초/밀리초를 0으로 고정
    referenceDate.setDate(currentDate.getDate() + days);
    referenceDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    // referenceDate <= selectedDate
    this.result = referenceDate <= selectedDate;
    return this;
  }

  /**
   * 해당 input.value가 주어진 targetDate보다 과거인지 검사합니다.
   * (targetDate >= selectedDate)
   *
   * @param {string|Date} targetDate - 기준 날짜(문자열이면 Date로 파싱)
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isDateAgo(targetDate) {
    const selectedDate = new Date(this.jobject.element.value);
    targetDate = JWrap.stringToDate(targetDate);
    targetDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    // targetDate >= selectedDate
    this.result = targetDate >= selectedDate;
    return this;
  }

  /**
   * 해당 input.value가 주어진 targetDate보다 미래인지 검사합니다.
   * (targetDate <= selectedDate)
   *
   * @param {string|Date} targetDate - 기준 날짜(문자열이면 Date로 파싱)
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isDateLater(targetDate) {
    const selectedDate = new Date(this.jobject.element.value);
    targetDate = JWrap.stringToDate(targetDate);
    targetDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    // targetDate <= selectedDate
    this.result = targetDate <= selectedDate;
    return this;
  }
}

/**
 * @classdesc time 타입의 input 값(예: 'HH:MM')에 대해
 * 특정 시/분 전후인지 검사하기 위한 클래스.
 *
 * @class JConditionForTime
 * @extends {JCondition}
 */
class JConditionForTime extends JCondition {
  /**
   * 해당 input.value가 현재 시각에서 지정한 시간(hours)만큼 전인지 검사합니다.
   *
   * @param {number} hours - 몇 시간 전인지
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isHoursAgo(hours) {
    const standardDate = new Date(Date.parse('2000-01-01'));

    const inputTime = new Date(standardDate);
    const [selectedHours, selectedMinutes] = this.jobject.element.value.split(':');
    inputTime.setHours(Number(selectedHours), Number(selectedMinutes), 0, 0);

    const referenceTime = new Date();
    // 날짜를 2000-01-01과 맞추고, 기준 시각에서 hours를 빼서 비교
    referenceTime.setFullYear(standardDate.getFullYear());
    referenceTime.setMonth(standardDate.getMonth());
    referenceTime.setDate(standardDate.getDate());
    referenceTime.setHours(
      referenceTime.getHours() - hours,
      referenceTime.getMinutes(),
      0,
      0,
    );

    // referenceTime >= inputTime
    this.result = referenceTime >= inputTime;
    return this;
  }

  /**
   * 해당 input.value가 현재 시각에서 지정한 시간(hours)만큼 이후인지 검사합니다.
   *
   * @param {number} hours - 몇 시간 후인지
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isHoursLater(hours) {
    const standardDate = new Date(Date.parse('2000-01-01'));

    const inputTime = new Date(standardDate);
    const [selectedHours, selectedMinutes] = this.jobject.element.value.split(':');
    inputTime.setHours(Number(selectedHours), Number(selectedMinutes), 0, 0);

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

    // referenceTime <= inputTime
    this.result = referenceTime <= inputTime;
    return this;
  }

  /**
   * 해당 input.value가 현재 시각에서 지정한 분(minutes)만큼 전인지 검사합니다.
   *
   * @param {number} minutes - 몇 분 전인지
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isMinutesAgo(minutes) {
    const standardDate = new Date(Date.parse('2000-01-01'));

    const inputTime = new Date(standardDate);
    const [selectedHours, selectedMinutes] = this.jobject.element.value.split(':');
    inputTime.setHours(Number(selectedHours), Number(selectedMinutes), 0, 0);

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

    // referenceTime >= inputTime
    this.result = referenceTime >= inputTime;
    return this;
  }

  /**
   * 해당 input.value가 현재 시각에서 지정한 분(minutes)만큼 이후인지 검사합니다.
   *
   * @param {number} minutes - 몇 분 후인지
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isMinutesLater(minutes) {
    const standardDate = new Date(Date.parse('2000-01-01'));

    const inputTime = new Date(standardDate);
    const [selectedHours, selectedMinutes] = this.jobject.element.value.split(':');
    inputTime.setHours(Number(selectedHours), Number(selectedMinutes), 0, 0);

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

    // referenceTime <= inputTime
    this.result = referenceTime <= inputTime;
    return this;
  }

  /**
   * 해당 input.value가 특정 시간(time)보다 과거인지 검사합니다.
   *
   * @param {string} time - 비교할 시간(HH:MM). 문자열
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isTimeAgo(time) {
    const standardDate = new Date(Date.parse('2000-01-01'));

    const inputTime = new Date(standardDate);
    const [selectedHours, selectedMinutes] = this.jobject.element.value.split(':');
    inputTime.setHours(Number(selectedHours), Number(selectedMinutes), 0, 0);

    const referenceTime = new Date(standardDate);
    const [hours, minutes] = time.split(':');
    referenceTime.setHours(Number(hours), Number(minutes), 0, 0);

    // referenceTime >= inputTime
    this.result = referenceTime >= inputTime;
    return this;
  }

  /**
   * 해당 input.value가 특정 시간(time)보다 이후인지 검사합니다.
   *
   * @param {string} time - 비교할 시간(HH:MM). 문자열
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isTimeLater(time) {
    const standardDate = new Date(Date.parse('2000-01-01'));

    const inputTime = new Date(standardDate);
    const [selectedHours, selectedMinutes] = this.jobject.element.value.split(':');
    inputTime.setHours(Number(selectedHours), Number(selectedMinutes), 0, 0);

    const referenceTime = new Date(standardDate);
    const [hours, minutes] = time.split(':');
    referenceTime.setHours(Number(hours), Number(minutes), 0, 0);

    // referenceTime <= inputTime
    this.result = referenceTime <= inputTime;
    return this;
  }
}

/**
 * @classdesc select 태그(드롭다운 등)에 대한 선택 여부, value 검사 등을 수행하기 위한 클래스.
 *
 * @class JConditionForSelect
 * @extends {JCondition}
 */
class JConditionForSelect extends JCondition {
  /**
   * 하나 이상 옵션이 선택되었는지 검사합니다.
   * (selectedOptions가 비어있지 않은지 확인)
   *
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isSelect() {
    const selectedOptions = Array.from(this.jobject.element.selectedOptions);
    this.result = selectedOptions.length > 0;
    return this;
  }

  /**
   * 특정 value를 가진 옵션이 선택되었는지 검사합니다.
   *
   * @param {string} value - 선택 여부를 확인할 option의 value
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isSelectByValue(value) {
    const selectedOptions = Array.from(this.jobject.element.selectedOptions);
    this.result = selectedOptions.some((option) => option.value === value);
    return this;
  }
}

/**
 * @classdesc file 타입의 input(파일 업로드)에 대해 파일 개수 검사를 수행하기 위한 클래스.
 *
 * @class JConditionForFile
 * @extends {JCondition}
 */
class JConditionForFile extends JCondition {
  /**
   * 업로드된 파일 개수가 number보다 많은지 검사합니다.
   *
   * @param {number} number - 비교할 파일 개수
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isGreaterFilesCount(number) {
    this.result = this.jobject.element.files.length > number;
    return this;
  }

  /**
   * 업로드된 파일 개수가 number보다 적은지 검사합니다.
   *
   * @param {number} number - 비교할 파일 개수
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isLessFilesCount(number) {
    this.result = this.jobject.element.files.length < number;
    return this;
  }

  /**
   * 업로드된 파일 개수가 start 이상, end 이하 범위인지 검사합니다.
   *
   * @param {number} start - 최소 파일 개수
   * @param {number} end - 최대 파일 개수
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isFilesCountBetween(start, end) {
    this.result = (
      this.jobject.element.files.length >= start 
      && this.jobject.element.files.length <= end
    );
    return this;
  }

  /**
   * 업로드된 파일 개수가 start 이상, end 이하 범위를 벗어났는지 검사합니다.
   *
   * @param {number} start - 최소 파일 개수
   * @param {number} end - 최대 파일 개수
   * @returns {this} 현재 객체(this), 체이닝 가능
   */
  isNotFilesCountBetween(start, end) {
    // 오타인 듯 보이는 isCountBetween -> isFilesCountBetween 로 수정 가정
    this.isFilesCountBetween(start, end);
    this.result = !this.result;
    return this;
  }
}

/**
 * @classdesc 다수의 DOM 요소에 대한 조건(검사)을 정의하고 평가하기 위한 클래스.
 * JCondition을 확장하여, passOption 기능 등을 추가로 제공합니다.
 *
 * @class JConditionForElements
 * @extends {JCondition}
 */
class JConditionForElements extends JCondition {
  /**
   * 조건을 만족해야 하는 최소 개수( passOption <= 만족 개수 )를 저장합니다.
   * @type {number}
   */
  passOption = 0;

  /**
   * 생성자
   * 
   * @constructor
   * @param {JElements} jobject - 다수의 DOM 요소를 래핑한 객체(JElements 등)
   */
  constructor(jobject) {
    super(jobject);
  }

  /**
   * 조건을 만족해야 하는 최소 개수를 설정합니다.
   * (예: passOption이 2라면, 검사 로직에서 최소 2개의 요소가 true여야 최종 결과가 true)
   *
   * @param {number} number - 필요한 최소 true 개수
   * @returns {this} 현재 객체(this)를 반환 (메서드 체이닝 지원)
   */
  setPassOption(number) {
    this.passOption = number;
    return this;
  }

  /**
   * 각 요소에 대해 fn 콜백을 실행하여, 모든/또는 일부 요소가 조건을 만족하는지 평가합니다.
   * 
   * - fn(element)가 false를 반환하면 조건 불만족 요소로 간주됩니다.
   * - passOption이 0 이하이면, 모든 요소가 true여야 최종 결과(result)가 true가 됩니다.
   * - passOption이 1 이상이면, 그 개수 이상 true인 경우에만 최종 결과가 true가 됩니다.
   *
   * @param {Function} fn - 각 요소를 검사할 콜백(반환값이 false면 불만족)
   * @returns {this} 현재 객체(this)를 반환 (체이닝 가능)
   * @throws {JTypeError} fn이 함수가 아닐 경우
   */
  foreach(fn) {
    if (typeof fn === 'function') {
      let trueCount = this.jobject.elements.length;
      for (let element of this.jobject.elements) {
        let result = fn(element);
        if (result === false) {
          trueCount--;
        }
      }
      // passOption <= 0 → 전부 만족해야 함 (trueCount == 요소 개수)
      if (this.passOption <= 0) {
        if (trueCount === this.jobject.elements.length) {
          this.result = true;
        } else {
          this.result = false;
        }
      } 
      // passOption > 0 → 해당 개수 이상 만족해야 함
      else {
        if (trueCount >= this.passOption) {
          this.result = true;
        } else {
          this.result = false;
        }
      }
    } else {
      throw new JTypeError();
    }
    return this;
  }
}

/**
 * @classdesc 다수의 input 요소(JInputs) 각각에 대해 다양한 조건(빈 값 검사, 특정 값 일치, 길이 검사 등)을 수행하기 위한 클래스.
 * @extends {JConditionForElements}
 */
class JConditionForInputs extends JConditionForElements {
  /**
   * 내부의 모든 input 값이 비어있는지(isEmpty) 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isEmpty() {
    this.foreach((element) => {
      return new JInput(element).isEmpty().result;
    });
    return this;
  }

  /**
   * 내부의 모든 input 값이 비어있지 않은지(isNotEmpty) 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isNotEmpty() {
    this.foreach((element) => {
      return new JInput(element).isNotEmpty().result;
    });
    return this;
  }

  /**
   * 모든 input 값이 특정 value와 일치하는지(isEqual) 검사합니다.
   *
   * @param {string} value - 비교 대상 값
   * @returns {this} 현재 객체(this)
   */
  isEqual(value) {
    this.foreach((element) => {
      return new JInput(element).isEqual(value).result;
    });
    return this;
  }

  /**
   * 모든 input 값이 특정 value와 일치하지 않는지(isNotEqual) 검사합니다.
   *
   * @param {string} value - 비교 대상 값
   * @returns {this} 현재 객체(this)
   */
  isNotEqual(value) {
    this.foreach((element) => {
      return new JInput(element).isNotEqual(value).result;
    });
    return this;
  }

  /**
   * 모든 input 값에 특정 value가 포함되어 있는지(isIncludes) 검사합니다.
   *
   * @param {string} value - 포함 여부를 확인할 문자열
   * @returns {this} 현재 객체(this)
   */
  isIncludes(value) {
    this.foreach((element) => {
      return new JInput(element).isIncludes(value).result;
    });
    return this;
  }

  /**
   * 모든 input 값에 특정 value가 포함되어 있지 않은지(isNotIncludes) 검사합니다.
   *
   * @param {string} value - 미포함 여부를 확인할 문자열
   * @returns {this} 현재 객체(this)
   */
  isNotIncludes(value) {
    this.foreach((element) => {
      return new JInput(element).isNotIncludes(value).result;
    });
    return this;
  }

  /**
   * 모든 input 값이 number보다 큰지(isGreaterValue) 검사합니다. (문자열 비교 주의)
   *
   * @param {string|number} number - 비교 대상
   * @returns {this} 현재 객체(this)
   */
  isGreaterValue(number) {
    this.foreach((element) => {
      return new JInput(element).isGreaterValue(number).result;
    });
    return this;
  }

  /**
   * 모든 input 값이 number보다 작은지(isLessValue) 검사합니다.
   *
   * @param {string|number} number - 비교 대상
   * @returns {this} 현재 객체(this)
   */
  isLessValue(number) {
    this.foreach((element) => {
      return new JInput(element).isLessValue(number).result;
    });
    return this;
  }

  /**
   * 모든 input 값의 길이가 number보다 긴지(isGreaterLength) 검사합니다.
   *
   * @param {number} number - 길이 비교 대상
   * @returns {this} 현재 객체(this)
   */
  isGreaterLength(number) {
    this.foreach((element) => {
      return new JInput(element).isGreaterLength(number).result;
    });
    return this;
  }

  /**
   * 모든 input 값의 길이가 number보다 짧은지(isLessLength) 검사합니다.
   *
   * @param {number} number - 길이 비교 대상
   * @returns {this} 현재 객체(this)
   */
  isLessLength(number) {
    this.foreach((element) => {
      return new JInput(element).isLessLength(number).result;
    });
    return this;
  }

  /**
   * 모든 input 값이 start 이상, end 이하 범위인지(isValueBetween) 검사합니다.
   *
   * @param {string|number} start - 시작 범위
   * @param {string|number} end - 끝 범위
   * @returns {this} 현재 객체(this)
   */
  isValueBetween(start, end) {
    this.foreach((element) => {
      return new JInput(element).isValueBetween(start, end).result;
    });
    return this;
  }

  /**
   * 모든 input 값이 start 이상, end 이하 범위를 벗어났는지(isNotValueBetween) 검사합니다.
   *
   * @param {string|number} start - 시작 범위
   * @param {string|number} end - 끝 범위
   * @returns {this} 현재 객체(this)
   */
  isNotValueBetween(start, end) {
    this.foreach((element) => {
      return new JInput(element).isNotValueBetween(start, end).result;
    });
    return this;
  }

  /**
   * 모든 input 값의 길이가 start 이상, end 이하 범위인지(isLengthBetween) 검사합니다.
   *
   * @param {number} start - 최소 길이
   * @param {number} end - 최대 길이
   * @returns {this} 현재 객체(this)
   */
  isLengthBetween(start, end) {
    this.foreach((element) => {
      return new JInput(element).isLengthBetween(start, end).result;
    });
    return this;
  }

  /**
   * 모든 input 값의 길이가 start 이상, end 이하 범위를 벗어났는지(isNotLengthBetween) 검사합니다.
   *
   * @param {number} start - 최소 길이
   * @param {number} end - 최대 길이
   * @returns {this} 현재 객체(this)
   */
  isNotLengthBetween(start, end) {
    this.foreach((element) => {
      return new JInput(element).isNotLengthBetween(start, end).result;
    });
    return this;
  }

  /**
   * 모든 input 값이 숫자인지(isNumber) 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNumber() {
    this.foreach((element) => {
      return new JInput(element).isNumber().result;
    });
    return this;
  }

  /**
   * 모든 input 값이 숫자가 아닌지(isNotNumber) 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotNumber() {
    this.foreach((element) => {
      return new JInput(element).isNotNumber().result;
    });
    return this;
  }

  /**
   * 영어 알파벳(대소문자)만으로 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isOnlyEnglish() {
    this.foreach((element) => {
      return new JInput(element).isOnlyEnglish().result;
    });
    return this;
  }

  /**
   * 영어 알파벳(대소문자)만으로 구성되어 있지 않은지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isNotOnlyEnglish() {
    this.foreach((element) => {
      return new JInput(element).isNotOnlyEnglish().result;
    });
    return this;
  }

  /**
   * 소문자로만 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isLowercase() {
    this.foreach((element) => {
      return new JInput(element).isLowercase().result;
    });
    return this;
  }

  /**
   * 소문자로만 구성되어 있지 않은지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isNotLowercase() {
    this.foreach((element) => {
      return new JInput(element).isNotLowercase().result;
    });
    return this;
  }

  /**
   * 대문자로만 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isUppercase() {
    this.foreach((element) => {
      return new JInput(element).isUppercase().result;
    });
    return this;
  }

  /**
   * 대문자로만 구성되어 있지 않은지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isNotUppercase() {
    this.foreach((element) => {
      return new JInput(element).isNotUppercase().result;
    });
    return this;
  }

  /**
   * 한글(가-힣)만으로 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isOnlyKorean() {
    this.foreach((element) => {
      return new JInput(element).isOnlyKorean().result;
    });
    return this;
  }

  /**
   * 한글(가-힣)만으로 구성되어 있지 않은지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isNotOnlyKorean() {
    this.foreach((element) => {
      return new JInput(element).isNotOnlyKorean().result;
    });
    return this;
  }

  /**
   * 일본어(히라가나, 가타카나, 한자 등)만으로 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isOnlyJapanese() {
    this.foreach((element) => {
      return new JInput(element).isOnlyJapanese().result;
    });
    return this;
  }

  /**
   * 일본어(히라가나, 가타카나, 한자 등)만으로 구성되어 있지 않은지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isNotOnlyJapanese() {
    this.foreach((element) => {
      return new JInput(element).isNotOnlyJapanese().result;
    });
    return this;
  }

  /**
   * 히라가나만으로 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isOnlyHiragana() {
    this.foreach((element) => {
      return new JInput(element).isOnlyHiragana().result;
    });
    return this;
  }

  /**
   * 히라가나만으로 구성되어 있지 않은지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isNotOnlyHiragana() {
    this.foreach((element) => {
      return new JInput(element).isNotOnlyHiragana().result;
    });
    return this;
  }

  /**
   * 가타카나만으로 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isOnlyKatakana() {
    this.foreach((element) => {
      return new JInput(element).isOnlyKatakana().result;
    });
    return this;
  }

  /**
   * 한자만으로 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isOnlyKanji() {
    this.foreach((element) => {
      return new JInput(element).isOnlyKanji().result;
    });
    return this;
  }

  /**
   * 한자만으로 구성되어 있지 않은지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isNotOnlyKanji() {
    this.foreach((element) => {
      return new JInput(element).isNotOnlyKanji().result;
    });
    return this;
  }

  /**
   * 중국어만으로 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isOnlyChanese() {
    this.foreach((element) => {
      return new JInput(element).isOnlyChanese().result;
    });
    return this;
  }

  /**
   * 중국어만으로 구성되어 있지 않은지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isNotOnlyChanese() {
    this.foreach((element) => {
      return new JInput(element).isNotOnlyChanese().result;
    });
    return this;
  }

  /**
   * 공백(스페이스)이 포함되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isIncludesSpace() {
    this.foreach((element) => {
      return new JInput(element).isIncludesSpace().result;
    });
    return this;
  }

  /**
   * 공백(스페이스)이 포함되어 있지 않은지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isNotIncludesSpace() {
    this.foreach((element) => {
      return new JInput(element).isNotIncludesSpace().result;
    });
    return this;
  }

  /**
   * 특수문자가 포함되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isIncludesSpchar() {
    this.foreach((element) => {
      return new JInput(element).isIncludesSpchar().result;
    });
    return this;
  }

  /**
   * 특수문자가 포함되어 있지 않은지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isNotIncludesSpchar() {
    this.foreach((element) => {
      return new JInput(element).isNotIncludesSpchar().result;
    });
    return this;
  }

  /**
   * input 값이 ID 형식(영문, 숫자, -, _, .)만으로 구성되어 있는지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isId() {
    this.foreach((element) => {
      return new JInput(element).isId().result;
    });
    return this;
  }

  /**
   * input 값이 ID 형식과 일치하지 않는지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isNotId() {
    this.foreach((element) => {
      return new JInput(element).isNotId().result;
    });
    return this;
  }

  /**
   * 비밀번호 형식(최소 8자, 영문/숫자/특수문자 포함)인지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isPassword() {
    this.foreach((element) => {
      return new JInput(element).isPassword().result;
    });
    return this;
  }

  /**
   * 비밀번호 형식이 아닌지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isNotPassword() {
    this.foreach((element) => {
      return new JInput(element).isNotPassword().result;
    });
    return this;
  }

  /**
   * 강력한 비밀번호 형식(12자 이상)인지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isStrongPassword() {
    this.foreach((element) => {
      return new JInput(element).isStrongPassword().result;
    });
    return this;
  }

  /**
   * 강력한 비밀번호 형식이 아닌지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isNotStrongPassword() {
    this.foreach((element) => {
      return new JInput(element).isNotStrongPassword().result;
    });
    return this;
  }

  /**
   * 이메일 형식(영숫자 + @ + .)인지 검사합니다.
   *
   * @returns {this} 현재 객체(this). 체이닝 가능
   */
  isEmail() {
    this.foreach((element) => {
      return new JInput(element).isEmail().result;
    });
    return this;
  }

  /**
   * 모든 input 값이 이메일 형식이 아닌지(isNotEmail) 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotEmail() {
    this.foreach((element) => {
      return new JInput(element).isNotEmail().result;
    });
    return this;
  }

  /**
   * 모든 input 값이 URL 형식인지(isUrl) 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isUrl() {
    this.foreach((element) => {
      return new JInput(element).isUrl().result;
    });
    return this;
  }

  /**
   * 모든 input 값이 URL 형식이 아닌지(isNotUrl) 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotUrl() {
    this.foreach((element) => {
      return new JInput(element).isNotUrl().result;
    });
    return this;
  }

  /**
   * 모든 input 값이 전화번호 형식인지(isPhoneNumber) 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isPhoneNumber() {
    this.foreach((element) => {
      return new JInput(element).isPhoneNumber().result;
    });
    return this;
  }

  /**
   * 모든 input 값이 전화번호 형식이 아닌지(isNotPhoneNumber) 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotPhoneNumber() {
    this.foreach((element) => {
      return new JInput(element).isNotPhoneNumber().result;
    });
    return this;
  }

  /**
   * 모든 input 값이 우편번호 형식인지(isPostalCode) 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isPostalCode() {
    this.foreach((element) => {
      return new JInput(element).isPostalCode().result;
    });
    return this;
  }

  /**
   * 모든 input 값이 우편번호 형식이 아닌지(isNotPostalCode) 검사합니다.
   *
   * @returns {this} 현재 객체(this)
   */
  isNotPostalCode() {
    this.foreach((element) => {
      return new JInput(element).isNotPostalCode().result;
    });
    return this;
  }
}

/**
 * @classdesc 여러 radio 요소에 대한 체크 상태를 검사하기 위한 클래스.
 * JConditionForElements를 확장하여, isChecked나 특정 value가 체크되었는지(isCheckedByValue) 등을 확인합니다.
 *
 * @class JConditionForRadios
 * @extends {JConditionForElements}
 */
class JConditionForRadios extends JConditionForElements {
  /**
   * 하나 이상의 radio가 체크되어 있는지 확인합니다.
   * (elements 중 isChecked()가 true인 것이 하나라도 있는지 검사)
   *
   * @returns {this} 현재 객체(this)를 반환하여 메서드 체이닝을 지원합니다.
   */
  isChecked() {
    this.result = this.jobject.elements.some((element) => new JRadio(element).isChecked());
    return this;
  }

  /**
   * 특정 value를 가진 radio가 체크되어 있는지 확인합니다.
   * (elements 중 getValue() === value인 radio가 체크되어 있는지 검사)
   *
   * @param {string} value - 체크 여부를 확인할 radio의 value
   * @returns {this} 현재 객체(this)를 반환하여 메서드 체이닝을 지원합니다.
   */
  isCheckedByValue(value) {
    this.result = this.jobject.elements.some(
      (element) => new JRadio(element).getValue() === value
    );
    return this;
  }
}

/**
 * @classdesc 여러 checkbox 요소에 대한 체크 상태를 검사하기 위한 클래스.
 * JConditionForElements를 확장하여, 체크 개수나 특정 value 체크 여부 등을 확인합니다.
 *
 * @class JConditionForCheckboxes
 * @extends {JConditionForElements}
 */
class JConditionForCheckboxes extends JConditionForElements {
  /**
   * 체크된 checkbox가 number개 이상인지 확인합니다.
   * (디폴트 0이면 하나라도 체크되어 있으면 true, 
   * 1 이상이면 해당 수 이상의 checkbox가 체크되어 있어야 true)
   *
   * @param {number} [number=0] - 필요한 최소 체크 개수
   * @returns {this} 현재 객체(this)를 반환하여 메서드 체이닝을 지원합니다.
   */
  isChecked(number = 0) {
    this.setPassOption(number);
    this.foreach((element) => {
      return new JCheckbox(element).isChecked().result;
    });
    return this;
  }

  /**
   * 특정 value를 가진 checkbox가 체크되어 있는지 확인합니다.
   * (elements 중 getValue() === value인 checkbox가 체크되었는지 검사)
   *
   * @param {string} value - 체크 여부를 확인할 checkbox의 value
   * @returns {this} 현재 객체(this)를 반환하여 메서드 체이닝을 지원합니다.
   */
  isCheckedByValue(value) {
    this.result = this.jobject.elements.some(
      (element) => new JCheckbox(element).getValue() === value
    );
    return this;
  }
}

/**
 * @classdesc JWrap에서 공통으로 사용하는 기본 오류 클래스.
 * 모든 커스텀 에러는 이 클래스를 상속합니다.
 *
 * @class JError
 * @extends {Error}
 */
class JError extends Error {
  /**
   * 생성자
   *
   * @constructor
   * @param {string} message - 에러 메시지
   */
  constructor(message) {
    super(`JWrap Error (${message})`);
  }
}

/**
 * @classdesc null/undefined 참조 시 발생하는 오류
 *
 * @class JNullPointerError
 * @extends {JError}
 */
class JNullPointerError extends JError {
  /**
   * 생성자
   *
   * @constructor
   * @param {string} [message=`Null Pointer Error`] - 에러 메시지
   */
  constructor(message = `Null Pointer Error`) {
    super(message);
  }
}

/**
 * @classdesc 데이터 타입이 예상과 다를 때 발생하는 오류
 *
 * @class JTypeError
 * @extends {JError}
 */
class JTypeError extends JError {
  /**
   * 생성자
   *
   * @constructor
   * @param {string} [message=`Type Error`] - 에러 메시지
   */
  constructor(message = `Type Error`) {
    super(message);
  }
}

/**
 * @classdesc 유효하지 않은 인자를 받았을 때 발생하는 오류
 *
 * @class JInvalidArgumentError
 * @extends {JError}
 */
class JInvalidArgumentError extends JError {
  /**
   * 생성자
   *
   * @constructor
   * @param {string} [message=`Invalid Argument Error`] - 에러 메시지
   */
  constructor(message = `Invalid Argument Error`) {
    super(message);
  }
}

/**
 * @classdesc 찾고자 하는 프로퍼티가 없을 때 발생하는 오류
 *
 * @class JPropertyNotFoundError
 * @extends {JError}
 */
class JPropertyNotFoundError extends JError {
  /**
   * 생성자
   *
   * @constructor
   * @param {string} [message=`Property Not Found Error`] - 에러 메시지
   */
  constructor(message = `Property Not Found Error`) {
    super(message);
  }
}

/**
 * @classdesc 인덱스가 범위를 벗어났을 때 발생하는 오류
 *
 * @class JIndexOutOfBoundsError
 * @extends {JError}
 */
class JIndexOutOfBoundsError extends JError {
  /**
   * 생성자
   *
   * @constructor
   * @param {string} [message=`Index Out Of Bounds Error`] - 에러 메시지
   */
  constructor(message = `Index Out Of Bounds Error`) {
    super(message);
  }
}

/**
 * @classdesc fetch 요청이 실패했을 때 발생하는 오류
 *
 * @class JFetchError
 * @extends {JError}
 */
class JFetchError extends JError {
  /**
   * 생성자
   *
   * @constructor
   * @param {string} [message=`Fetch Error`] - 에러 메시지
   */
  constructor(message = `Fetch Error`) {
    super(message);
  }
}

/**
 * @classdesc getElementById() 등에서 찾는 요소가 없을 때 발생하는 오류
 *
 * @class JElementIdError
 * @extends {JError}
 */
class JElementIdError extends JError {
  /**
   * 생성자
   *
   * @constructor
   * @param {string} [message=`Element Id Error`] - 에러 메시지
   */
  constructor(message = `Element Id Error`) {
    super(message);
  }
}

/**
 * @classdesc getElementsByName() 등에서 찾는 요소가 없을 때 발생하는 오류
 *
 * @class JElementNameError
 * @extends {JError}
 */
class JElementNameError extends JError {
  /**
   * 생성자
   *
   * @constructor
   * @param {string} [message=`Element Name Error`] - 에러 메시지
   */
  constructor(message = `Element Name Error`) {
    super(message);
  }
}

/**
 * @classdesc 요소의 태그명이 예상과 다를 때 발생하는 오류
 *
 * @class JElementTagNameError
 * @extends {JError}
 */
class JElementTagNameError extends JError {
  /**
   * 생성자
   *
   * @constructor
   * @param {string} [message=`Element Tag Name Error`] - 에러 메시지
   */
  constructor(message = `Element Tag Name Error`) {
    super(message);
  }
}

/**
 * @classdesc 요소의 type 속성이 예상과 다를 때 발생하는 오류
 *
 * @class JElementTypeError
 * @extends {JError}
 */
class JElementTypeError extends JError {
  /**
   * 생성자
   *
   * @constructor
   * @param {string} [message=`Element Type Error`] - 에러 메시지
   */
  constructor(message = `Element Type Error`) {
    super(message);
  }
}

/**
 * @classdesc 조건문 처리 중 예기치 못한 오류(조건식 평가 등)
 *
 * @class JConditionError
 * @extends {JError}
 */
class JConditionError extends JError {
  /**
   * 생성자
   *
   * @constructor
   * @param {string} [message=`Condition Error`] - 에러 메시지
   */
  constructor(message = `Condition Error`) {
    super(message);
  }
}
