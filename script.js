function onSignIn(googleUser)
{
    var profile=googleUser.getBasicsProfile();
    $(".g-signin2").css("display",none);
    $(".data").css("dislay","block");
    $("#pic").attr('scr',profile.getEmail());
    $("#email").text(profile.getEmail());
}

function signOut()
{
    var auth2=api.auth2.getAuthInstance();
    auth2.signOut().then(function(){
        alert("You have successfully signed out");
        $(".g-signin2").css("display","block");
        $(".data").css("display","none");
    });
}