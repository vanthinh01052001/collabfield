document.addEventListener('turbo:load', function() { 

  // when conversation heading is clicked, toggle conversation
  document.body.addEventListener('click', function(e) {
      const heading = e.target.closest('.conversation-heading, .conversation-heading-full');

      if (heading) {
          e.preventDefault();
          const panel = heading.parentElement;
          const panelBody = panel.querySelector('.panel-body');

          panelBody.classList.toggle('hidden');

          // If you need to perform additional actions after toggling, you can add them here
      }
  });
});
