function validateAnnotations(annotationsArr) {
    //get all annotations in image
    let result = {}
    result.ok = true
    result.errors = []
    console.log(annotationsArr.length)
    if (annotationsArr.length == 0) {
        result.errorMessage = `Item must contain annotation before setting a complete status`
        result.ok = false
    }

    return result
}