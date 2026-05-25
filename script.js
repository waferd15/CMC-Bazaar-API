fetch("https://api.craftersmc.net/v1/skyblock/bazaar/enchanted_melon_block/details", {
  headers: {
    "X-API-Key": "YOUR_KEY"
  }
})
.then(res => res.json())
.then(data => {
  console.log(data);
});
