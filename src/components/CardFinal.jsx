import illustrationThankYou from "../assets/illustration-thank-you.svg"

export function CardFinal({ rateNote }) {
    return (
        <div className="bg-radial-gradient max-w-103 px-6 pt-6 pb-8 rounded-2xl font-overpass text-center">
        <img className="mx-auto mb-6" src={illustrationThankYou} alt="Illustration Thank You" />

        <p className="mb-6 text-orange bg-dark-blue w-fit mx-auto px-3 py-1.25 rounded-3xl">You select {rateNote} out of 5!</p>

        <h1 className="font-bold text-2xl mb-2.5">Thank You</h1>

        <p className="text-light-grey text-sm leading-1">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
    )
}