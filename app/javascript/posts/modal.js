import { Turbo } from "@hotwired/turbo-rails"

document.addEventListener('turbo:load', function() {
  // when a post is clicked, show its full content in a modal window
  document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains("single-post-card") || event.target.classList.contains("single-post-list")) {
      const post = event.target;
      const posted_by = post.querySelector('.post-content .posted-by').textContent;
      const post_heading = post.querySelector('.post-content h3').textContent;
      const post_content = post.querySelector('.post-content p').textContent;
      const interestedElement = post.querySelector('.post-content .interested a');
      const interested = interestedElement ? interestedElement.getAttribute('href') : '';
      

      // Update the modal content
      const modalHeader = document.querySelector('.modal-header');
      modalHeader.querySelector('.posted-by').textContent = posted_by;

      const loadedData = document.querySelector('.loaded-data');
      loadedData.querySelector('h3').textContent = post_heading;
      loadedData.querySelector('p').textContent = post_content;

      const interestedLink = loadedData.querySelector('.interested a');
      interestedLink.textContent = "I'm interested";
      interestedLink.setAttribute('href', interested);

      // Show the modal
      const modal = document.querySelector('.myModal');
      modal.style.display = 'block';
    }
  });
});

