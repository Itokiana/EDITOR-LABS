let myCodeMirror = CodeMirror.fromTextArea(document.getElementById('code'), {
    value: "function myScript(){return 100;}\n",
    mode:  "javascript",
    theme: "monokai",
    lineNumbers: true,
    styleActiveLine: true,
});
