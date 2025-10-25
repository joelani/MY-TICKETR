// import React from "react";
import { Camera } from "lucide-react";

export default function Features() {
  return (
    <section className="mt-24 backdrop-blur-2xl z-20">
      <h1 className="text-4xl font-semibold text-center mx-auto">
        Create Tickets
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
        Easily submit new tickets with a simple form and smart validation.
      </p>

      <div className="flex items-center justify-center flex-wrap gap-6 mt-20 px-4 md:px-0 z-20 backdrop-blur-2xl">
        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-orange-200 gap-6 max-w-sm">
          <div className="p-6 aspect-square bg-orange-100 rounded-full">
            <Camera
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              stroke="#F54900"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-700">
              Track Progress
            </h3>
            <p className="text-sm text-slate-600">
              Monitor open, in-progress, and closed tickets all in one place.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-green-200 gap-6 max-w-sm">
          <div className="p-6 aspect-square bg-green-100 rounded-full">
            <Camera
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              stroke="#00A63E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-700">
              Stay Notified
            </h3>
            <p className="text-sm text-slate-600">
              Get instant feedback and notifications for all ticket actions.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-orange-200 gap-6 max-w-sm">
          <div className="p-6 aspect-square bg-orange-100 rounded-full">
            <Camera
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              stroke="#F54900"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-700">
              Customizable Reports
            </h3>
            <p className="text-sm text-slate-600">
              Export professional, audit-ready financial reports for tax or
              internal review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
