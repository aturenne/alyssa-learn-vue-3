<template>
  <h1>{{ message }}</h1>

  <!-- replaceText() refers to function defined in the script-->
  <button v-on:click="replaceText('v-on is fun!')">Replace text</button>

  <!-- shorthand for v-on, equivalent to above line -->
  <button @click="replaceText('v-on is fun!')">Replace text</button>

  <hr />
  <p>An input field where the user can ONLY enter numbers:</p>
  <!-- $event is a special variable that refers to the event that just happened (key that was just clicked) - accesses native DOM event -->
  <input type="text" @keydown="handleInput($event)"/>

  <hr />
  <p>A demo of preventing the default behavior of an event.</p>
  <p>Right click in the cyan box below will not show the context menu:</p>
  <!-- prevent - shorthand for handling with method and using preventDefault() (vanilla) -->
  <!-- context menu - right click event -->
  <div style="width: 100px; height: 100px; background-color: aqua" 
    @contextmenu.prevent="console.log('Show a custom context menu instead')">
  </div>

  <hr />

  <p>A demo of stopping event propagation:</p>

  <div id="mouseover" @mouseover="fun1">
    <textarea @mouseover.stop="fun2($event)">This is a text area.</textarea>
  </div>
  <!-- textarea is nested within div, so mouseover textarea also means mouseover the parent div. unless you stopPropogation() -->

  <hr />
  <div>
    Press down the "Enter" key will trigger a console log print:
    <input
      type="text"
      @keydown.enter="console.log('You pressed the Enter key.')"
    />
  </div>
  <div>
    Press down the "Arrow Down" key will trigger a console log print:
    <input
      type="text"
      @keydown.down="console.log('You pressed the Arrow Down key.')"
    />
  </div>
  <div>
    Press down the "Space" key will trigger a console log print:
    <input
      type="text"
      @keydown.space="console.log('You pressed the Space key.')"
    />
  </div>
  <div>
    Press down the "b" key will trigger a console log print:
    <input type="text" @keydown.b="console.log('You pressed the B key.')" />
  </div>
  <div>
    Press down the "Ctrl c" will trigger a console log print:
    <input type="text" @keydown.ctrl.c="console.log('You pressed Ctrl c.')" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

let message = ref('Hello, v-on!')

function replaceText(msg) {
  message.value = msg
}

function handleInput(event) {
  console.log(event)
  let keyCode = event.keyCode
  if(keyCode < 48 || keyCode > 57){ //keycodes 48-57 correspond to numbers 0-9
    event.preventDefault()
  }
}

function fun1() {
  console.log('mouse over div')
}

function fun2(event) {
  console.log('mouse over text area')
}
</script>

<style scoped>
#mouseover {
  text-align: right;
  background-color: purple;
  width: 300px;
  height: 300px;
}
</style>