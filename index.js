function OnSubmitButtonClick()
{
    let npcName = document.getElementById("npcName").value;
    let npcIntro = document.getElementById("npcIntro").value;

    if (npcName.length === 0 || npcIntro.length === 0)
    {
        SetStatusMessage("Make sure all fields are not empty");
        return;
    }

    SetStatusMessage("Sending...");

    let db = firebase.firestore();
    let docRef = db.collection("npc").doc("npc_"+npcName);

    let setNpc = docRef.set(
        {
            name: npcName,
            intro: npcIntro
        }
    );

    setNpc.then(
        result => SetStatusMessage("Submitted!"),
        error => SetStatusMessage("Failed to submit to server.")
    )

    //1. Get information from the fields
    //2. Validate information
    //3. If validated, generate a request (create a json, etc.)
    //4. POST request and handle success and failure
    //5. That's it.
    //The rest is just design

    //Previous test output
    //document.getElementById("OutputText").textContent = "Submitted!";
}

function SetStatusMessage(text)
{
    document.getElementById("OutputText").textContent = text;
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