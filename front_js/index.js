(()=> {
    const projects_container = document.querySelector('.projects');
    const show_projects_message = document.querySelector('.show_projects_message');
    const hrefs = document.querySelectorAll('a');

    const update_projects_unfocus = () => {
        projects_container.classList.remove('focus');
        show_projects_message.textContent = "Click to show projects (6)"
    }

    const update_projects_focus = () => {
        projects_container.classList.add('focus');
        show_projects_message.textContent = "Click to hide projects"
    }

    projects_container.onclick = () => {
        projects_container.classList.contains('focus') ? 
                        update_projects_unfocus(): 
                        update_projects_focus()
    }

    // hrefs.onclick = e => e.stopPropagation()

})(document)