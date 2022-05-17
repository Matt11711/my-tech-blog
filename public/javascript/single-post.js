async function newPage(event) {
  event.preventDefault();

  // const title = document.querySelector('input[name="post-title"]').value;
  // const post_url = document.querySelector('input[name="post-url"]').value;

  const response = await fetch(`/post/${this.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log("success");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".title p").addEventListener("click", newPage);
