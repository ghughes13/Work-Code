//Replace 'idSelector' with the ID of the "File Upload" input element. 

let idSelector =  '#input_10_4'

let resumeSection = jQuery(idSelector);
let secondInput = jQuery(idSelector).clone();
jQuery('.ginput_container_fileupload').append('<div id="upload-section"><span class="upload-text">Attach Resume</span> <span class="upload-box"> BROWSE FILE</span></div');
    resumeSection.on("drop", function() {
        alert("File Uploaded")
    });

jQuery(idSelector).change(function() {
     let word = document.getElementById(idSelector).value.split('path\\')
     document.querySelector('.upload-text').innerText = word[word.length - 1];
})
