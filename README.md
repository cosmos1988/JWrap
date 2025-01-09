# Welcome to JWrap!

JWrap is a JavaScript library that simplifies web development with a variety of functions and classes.

## example
```javascript
JButton.from("btn").addClickEvent( () => {
    JInput.from("test")
        .if().isEmpty()
            .then().alert("Empty")
        .else().if().isNumber().or().isOnlyEnglish()
            .then().alert("Number or English")
        .else().alert("Not Empty");
```
