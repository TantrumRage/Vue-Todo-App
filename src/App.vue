<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

body {
  height: 100vh;
  display: flex;
  margin: 0;
  overflow: hidden;
}
.home {
  width: 350px;
  height: 90vh;
  margin: auto;
}
#todo-container {
  flex-flow: column;
}
#todo-header {
  flex: 0 1 auto;
}

#todo-content {
  flex: 1 1 auto;
  word-wrap: break-word;
  overflow-y: auto;
}

#todo-footer {
  flex: 0 1 auto;
}

.pointer {
  cursor: pointer;
}

.done {
  text-decoration: line-through;
}

.overlay {
  z-index: 9999;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #00000021;
  display: flex;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media only screen and (max-width: 330px) {
  .home {
    width: 100%;
  }
}
</style>
