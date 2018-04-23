

// This line works:
navigator.geolocation.getCurrentPosition(pos => document.body.innerHTML += `${pos.coords.latitude}, ${pos.coords.longitude}`)


function getPosition(options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}

getPosition()
  .then((position) => {
    console.log(position);
    document.body.innerHTML = `${position.coords.latitude}, ${position.coords.longitude}`
    alert(`${position.coords.latitude}, ${position.coords.longitude}`);

  })
  .catch((err) => {
    console.error(err.message);
  });
