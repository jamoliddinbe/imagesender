const bot = {
    TOKEN: "5851134377:AAFUQnfszfBNVaVK08ztEXrja1hgyTW9jk4",
    chatID: "2133022326",
  }
   

  const form = document.querySelector("#form")

  .addEventListener("submit", e => {
    e.preventDefault();
   
    const imageUrl = document.querySelector("#img_url").value;
   
    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendPhoto?chat_id=${bot.chatID}&photo=${imageUrl}`)
    .then(succ => {
      console.log(succ);
    }, err => {
      console.log(err);
    })
  })