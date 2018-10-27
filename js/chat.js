function Chat(loopy){
  var self = this
  self.log = document.getElementById("chat_log")
  self.input = document.getElementById("chat_input")

  self.logMessage = function(content, sender){
    var msg = document.createElement("div")
    msg.innerHTML = content
    msg.classList.add("msg", "msg_" + sender)
    self.log.appendChild(msg)
    self.log.scrollTop = self.log.scrollHeight;
  }

  self.input.onkeydown = function(event){
    if (event.key == "Enter"){
      content = self.input.value
      self.logMessage(content, "user")
      self.input.value = ""
      self.logMessage(content + content + content, "agent")
    }
  };
}
