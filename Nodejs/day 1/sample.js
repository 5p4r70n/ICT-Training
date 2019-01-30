var saybye=function()
{
    console.log("good bye")
}
saybye();

function showmessage(msg)
{
    msg();
}
showmessage(saybye);