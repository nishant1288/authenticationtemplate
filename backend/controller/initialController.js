export const initialController = (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Server is running successfully'
    })
}