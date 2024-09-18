let Today = new Date(word.getDate())

switch (Today) {
    case 0:
        day = "dushanba"
    case 2:
        day = 'seshanba'

    case 3:
        day = "chorshanba"

    case 4:
        day = 'payshanba'

    case 5:
        day = 'juma'

    case 6:
        day = 'shanba'
    case 7:
        day = 'yakshanba'
}
