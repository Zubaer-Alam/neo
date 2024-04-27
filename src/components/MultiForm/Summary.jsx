import React from "react";

const Summary = () => {
  return (
    <div>
      {/* <div class="bg-white overflow-hidden shadow rounded-lg border">
    <div class="px-4 py-5 sm:px-6">
        <h1 class="text-xl leading-6 font-semibold text-gray-900">
    iPhone SE 2022
        </h1>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
        <div class="px-6 py-3 flex gap-3">
        
        <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ">Dark</span>
        <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ">Red</span>
        <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ">Dark Mode</span>

    </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    John Doe
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    johndoe@example.com
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Phone number
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    (123) 456-7890
                </dd>
            </div>
         
           
        </dl>
    </div>
</div> */}

      <div class="ring-1 drop-shadow-sm ring-gray-100  rounded-lg py-5 px-8 relative block">
        <div class="absolute -end-0 -top-0.5 size-auto items-center justify-center">
          <span class="inline-flex items-center rounded-tr-lg rounded-bl-lg bg-teal-50 px-2 py-1 text-xs font-medium text-teal-900 ">
            To rent 50$ / day
          </span>
        </div>
        <p class="mt-4 text-xl leading-6 text-gray-700">
          1 license for up to 3 activations
        </p>
        <p class="mt-4 flex items-baseline gap-x-1">
          <span class="text-2xl font-bold tracking-tight text-gray-900">
            $500
          </span>
        </p>

        <div className="flex items-center gap-2 mt-4">
          <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Badge
          </span>
          <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Badge
          </span>
          <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Badge
          </span>
          <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Badge
          </span>
        </div>

        <p className="flex text-gray-600 w-[500px] my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quo
          tempora doloribus! Quidem eaque iure quaerat praesentium architecto
          magnam iste odio quis beatae, obcaecati qui minus voluptatem maxime
          voluptatum? Ipsa?
        </p>
      </div>
    </div>
  );
};

export default Summary;
