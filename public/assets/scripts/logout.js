const logOutReq = async () => {

const request = await fetch('api/account/logout',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
});

if (request.ok) {
    document.location.replace('/');
  } else {
    console.log('error logging out');
  };
};

document.getElementById('logout').addEventListener('click', logOutReq);