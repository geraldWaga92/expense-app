const IncomeSchema = require("../models/IncomeModel")


exports.addIncome = async (req, res) => {
    //destructure to get data from req.body
    const { title, amount, category, description, date } = req.body

    // the data schema we want 
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //this is on the form field when inoputing amount if there is a fiels that is not typed
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' })
        }
        // if there it is not a number or negative number
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number!' })
        }
        // if everything is ok
        await income.save()
        res.status(200).json({ message: 'Income Added' })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }

    console.log(income)
}

exports.getIncomes = async (req, res) => {
    try {
        // find the last income and make it at the top of the list
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 })
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}

exports.deleteIncome = async (req, res) => {
    // get the id of the income we want to delete
    const { id } = req.params;

    IncomeSchema.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: 'Income Deleted' })
        })
        .catch(() => {
            res.status(500).json({ message: 'Server Error' })
        })
}