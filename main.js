const togglePanel = (contentId, headingId) => {
  const panelContent = document.getElementById(contentId);
  const panelHeading = document.getElementById(headingId);

  panelHeading.onclick = () => {
    panelContent.classList.toggle('hidden');
  };
};

togglePanel('cv-content', 'cv-heading');
togglePanel('sdfb-content', 'sdfb-heading');
togglePanel('about-content', 'about-heading');
