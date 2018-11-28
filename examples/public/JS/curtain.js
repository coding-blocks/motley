
$(".curtains").click((e) => {
  targetCurtain = e.target.attributes['data-target'].nodeValue;

  switch (targetCurtain) {
    case 'left': $(e.currentTarget.children[0]).toggleClass('collapse').siblings().addClass('collapse');
      break;
    case 'right': $(e.currentTarget.children[2]).toggleClass('collapse').siblings().addClass('collapse');
      break;
  }

})
