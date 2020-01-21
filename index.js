function OnSubmitButtonClick()
{
    GetAllNPCs();
    

    //1. Get information from the fields
    //2. Validate information
    //3. If validated, generate a request (create a json, etc.)
    //4. POST request and handle success and failure
    //5. That's it.
    //The rest is just design

    //Previous test output
    //document.getElementById("OutputText").textContent = "Submitted!";
}

function OnClearButtonClick()
{
    document.getElementById("OutputText").textContent = "Cleared!";
}

function GetAllNPCs() {
    var db = firebase.firestore();

    let dbRequest = db.collection("npc").get();
    dbRequest.then(
        result => OutputAllNpc(result)
    );

}

function OutputAllNpc(data) {
    data.forEach(doc => {
        console.log(doc.id, "=>", doc.data());
    });
}

function AddNpc(docName, npcName, npcIntro) {
    var db = firebase.firestore();
    let docRef = db.collection("npc").doc(docName);

    let setNpc = docRef.set(
        {
            name: npcName,
            intro: npcIntro
        }
    );
}