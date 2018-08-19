
function submitNetworkData(){
  $.ajax(
      {
        type: 'post',
        url: '/python',
        data: $('#loader').serialize(),
        dataType: 'json',
      })
      .done(( json ) => {
        $('.results').empty();
        $('.results').append(JSON.stringify(json));
      })
      .fail(( xhr, status, err) => {console.log(err)})
      .always((xhr, status) => {
        console.log("finished");
      })
}
