'use strict';

// If "check" button is pressed, cross out the item
function checkClicks() {
    $('ul').on('click', 'button.shopping-item-toggle', event => {
        event.preventDefault();
        event.stopPropagation();
        $(event.target).closest('li').find('.shopping-item').addClass('shopping-item__checked');
    });
}

// if "delete" button is pressed, delete entire item line
function deleteClicks() {
    $('ul').on('click', 'button.shopping-item-delete', event => {
        event.preventDefault();
        event.stopPropagation();
        $(event.target).closest('li').remove();
    });
}

// get input value and insert that into the "append" template below and append it to the list.
function addSubmission() {
    $('.js-shopping-list-form').on('submit', event => {
        event.preventDefault();
        event.stopPropagation();
        let inputVal = $(".js-shopping-list-entry").val();
        $('ul.shopping-list').append(`<li>
        <span class="shopping-item">${inputVal}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`);
    });
}

// run functions
$(checkClicks);
$(deleteClicks);
$(addSubmission);