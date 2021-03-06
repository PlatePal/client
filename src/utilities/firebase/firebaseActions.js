import constants from "./firebaseConstants";
import firebase from "./firebase";

const authenticateUser = () => {
  var currentU = firebase.auth().currentUser;
  if (currentU == null) return constants.anonymous;
  else return firebase.auth().currentUser.uid;
};

const errorHandling = (error) => {
  if (error) {
    // The write failed...
    console.log("Write failed");
  } else {
    // Data saved successfully!
    console.log("Write successful");
  }
};

export const addAllergy = (allergies) => {
  var currentU = authenticateUser();
  currentU="anonymous";

  firebase
    .database()
    .ref(`userID/${currentU}/${constants.preference}`)
    .update({ allergies }, (error) => {
      errorHandling(error);
    });
};

export const addSpecialDiet = (diet) => {
  var currentU = authenticateUser();
  currentU="anonymous";

  firebase
    .database()
    .ref(`userID/${currentU}/${constants.preference}`)
    .update({ diet }, (error) => {
      errorHandling(error);
    });
};

export const addDairyOption = (items) => {
  var currentU = authenticateUser();

  firebase
    .database()
    .ref(`userID/${currentU}/${constants.preference}`)
    .update({ [constants.preference]: items }, (error) => {
      errorHandling(error);
    });
};

export const addProduceOption = (items) => {
  var currentU = authenticateUser();

  firebase
    .database()
    .ref(`userID/${currentU}/${constants.preference}`)
    .update({ [constants.produceOption]: items }, (error) => {
      errorHandling(error);
    });
};

export const addBakingOption = (items) => {
  var currentU = authenticateUser();

  firebase
    .database()
    .ref(`userID/${currentU}/${constants.preference}`)
    .update({ [constants.bakingOption]: items }, (error) => {
      errorHandling(error);
    });
};

export const addLikedRecipe = (recipe, section, title) => {
  return new Promise(() => {
    var currentU = authenticateUser();

    firebase
      .database()
      .ref(
        "userID/" +
          currentU +
          "/todayRecipe/Timestamp/" +
          section +
          "/" +
          recipe
      )
      .set(
        {
          recipe: title,
        },
        (error) => {
          errorHandling(error);
        }
      );
  });
};

export const updateMetric = (m) => {
  var currentU = authenticateUser();
  currentU="anonymous";

  firebase
    .database()
    .ref("userID/" + currentU)
    .set(
      {
        preference: {
          metric: m,
        },
      },
      (error) => {
        errorHandling(error);
      }
    );
};

export const getPreferences = () => {
  var currentU = authenticateUser();

  return firebase
    .database()
    .ref(`userID/anonymous/${constants.preference}`)
    .get();
};

export const saveRecipe = (recipe, title) => {
  return new Promise(() => {
    var currentU = authenticateUser();

    firebase
      .database()
      .ref("userID/" + currentU + "/" + constants.savedRecipe + "/" + recipe)
      .set(
        {
          recipe: title,
        },
        (error) => {
          errorHandling(error);
        }
      );
  });
};

export const getTodayRecipe = () => {
  var currentU = authenticateUser();

  return firebase
    .database()
    .ref(`userID/${currentU}/${constants.todayRecipe}`)
    .get();
};

export const getSavedRecipe = () => {
  var currentU = authenticateUser();

  return firebase
    .database()
    .ref("userID/" + currentU + "/" + constants.savedRecipe)
    .get();
};
