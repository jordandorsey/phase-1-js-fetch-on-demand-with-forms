const init = () => {
    let form = document.querySelector('form')
  
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const searchId = event.target.children[1].value
      // const searchId = document.getElementById('searchByID').value
  
      fetch(`http://localhost:3000/movies/${searchId}`) 
      .then(response => response.json())
      .then(data => {
      
        let title = document.querySelector('section#movieDetails h4')
        let summary = document.querySelector('section#movieDetails p')
  
        title.innerText = data.title
        summary.innerText = data.summary
      })
    })
    
  }
  
  document.addEventListener('DOMContentLoaded', init);
  