// Code your solution here
function findMatching(drivers, query){
    return drivers.filter(driver => 
        driver.toLowerCase()=== query.toLowerCase()
        );
}

function fuzzyMatch(drivers, testString){
    return drivers.filter(driver => 
        driver.toLowerCase().startsWith(testString.toLowerCase())
        );
}

function matchName(drivers, testString){
    return drivers.filter(driver =>
        driver.name.toLowerCase()=== testString.toLowerCase()
        );
}