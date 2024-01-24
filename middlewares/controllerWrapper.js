const controllerWrapper = (ctrl) => {
  return async (req, res, next) => {
    try {
      await ctrl(req, res, next)
    } catch (error) {
      console.log("🚀 ~ return ~ error:", error)
      next(error)
    }
  }
}

module.exports = controllerWrapper