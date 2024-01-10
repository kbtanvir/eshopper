export const gs = {
  maxW: "1200px",
};

const TopBar: React.FC = () => (
  <div className=" flex flex-col items-stretch bg-blue-800 p-3.5 ">
    <span
      className={`mx-auto  flex w-full max-w-[${gs.maxW}] items-stretch justify-between gap-5 max-md:flex-wrap`}
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c16a4058403d9f8ed01fafc12e0ddc93676b0c3a2bbf7cf9bb1f37e4b9a17788?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
        className="aspect-[6.5] w-[117px] max-w-full shrink-0 overflow-hidden object-contain object-center"
      />
      <div className="text-sm leading-5 text-white">
        Enter WINTERZ to get 30% off
      </div>
      <span className="my-auto flex items-start justify-between gap-1.5 self-center max-sm:hidden">
        <div className="grow whitespace-nowrap text-center text-sm leading-6 text-white">
          United States USD $
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f2c1fbaf0819b89a5925bf10413f4df593da17a95e4046f8fa5eaff36fe0885?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
          className="my-auto aspect-[1.43] w-2.5 max-w-full shrink-0 self-center overflow-hidden object-contain object-center"
        />
        <div className="text-center text-sm leading-6 text-white">English</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3055743a69c374d1ed87136da7b17b0670e578a5744d2c4b6600703c2849c285?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
          className="my-auto aspect-[1.43] w-2.5 max-w-full shrink-0 self-center overflow-hidden object-contain object-center"
        />
      </span>
    </span>
  </div>
);
const MainHeader: React.FC = () => (
  <div
    className={`mx-auto mt-9 flex max-w-[${gs.maxW}] items-center justify-between gap-5  max-md:max-w-full max-md:flex-wrap`}
  >
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/36f9cdb27d1c00c7ed8c7d92f401a5ca2ebd653b144a7499d3d30d5a29832157?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/36f9cdb27d1c00c7ed8c7d92f401a5ca2ebd653b144a7499d3d30d5a29832157?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36f9cdb27d1c00c7ed8c7d92f401a5ca2ebd653b144a7499d3d30d5a29832157?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/36f9cdb27d1c00c7ed8c7d92f401a5ca2ebd653b144a7499d3d30d5a29832157?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/36f9cdb27d1c00c7ed8c7d92f401a5ca2ebd653b144a7499d3d30d5a29832157?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36f9cdb27d1c00c7ed8c7d92f401a5ca2ebd653b144a7499d3d30d5a29832157?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/36f9cdb27d1c00c7ed8c7d92f401a5ca2ebd653b144a7499d3d30d5a29832157?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/36f9cdb27d1c00c7ed8c7d92f401a5ca2ebd653b144a7499d3d30d5a29832157?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
      className="my-auto aspect-[3.62] w-[141px] max-w-full shrink-0 overflow-hidden object-contain object-center"
    />
    <div className="flex max-h-[50px] w-full max-w-[750px] items-stretch justify-between gap-0 self-stretch max-md:max-w-full max-md:flex-wrap">
      <span className="flex  w-full max-w-[150px] items-center justify-center gap-5 border border-solid border-zinc-800 border-opacity-10 ">
        <div className="text-center text-base text-zinc-800 text-opacity-80">
          All tags
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/528b15e6067e0e5abbc44d458e8d5c5bdc2d81ad941fa26a5fb8986774f8fe5f?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
          className="my-auto aspect-[1.67] w-2.5 max-w-full shrink-0 self-center overflow-hidden object-contain object-center"
        />
      </span>
      <div className="flex grow basis-[0%] flex-col items-end justify-center border border-solid border-zinc-800 border-opacity-10 max-md:max-w-full max-md:pl-5">
        <input
          type="text"
          className="h-full w-full border border-solid border-zinc-800 border-opacity-10 pl-16"
        />
        <span className="absolute">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eedb4369e4c6c5540db074793bc03e0566864459364db450b723fea7a4985fa?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
            className="aspect-[1.1] w-[42px] max-w-full overflow-hidden object-contain object-center"
          />
        </span>
      </div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cd286442993cdfe0706aede906dfa8a045121e1ddb8bda9966e8b8e7bf130f3?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
      className="mt-1 aspect-[3.63] w-[116px] max-w-full shrink-0 self-start overflow-hidden object-contain object-center"
    />
  </div>
);
const NavigationSection: React.FC = () => (
  <div className="mt-10 flex w-full items-stretch justify-between gap-5 border-b border-t border-solid border-y-gray-200 py-6 pl-11 pr-9 max-md:max-w-full max-md:flex-wrap max-md:px-5">
    <span className="flex items-stretch justify-between gap-3">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/10ee5ad50561b854f62cf8cd05183ec228a0548a5b88abaa897f13240c2f1994?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
        className="aspect-square w-7 max-w-full shrink-0 overflow-hidden object-contain object-center"
      />
      <div className="my-auto grow self-center whitespace-nowrap text-center text-base leading-7 text-zinc-800">
        All Categories
      </div>
    </span>
    <span className="my-auto flex items-start justify-between gap-2 self-center max-md:max-w-full max-md:flex-wrap">
      <div className="grow self-start whitespace-nowrap text-lg leading-5 text-zinc-800">
        Watches
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/470edc6678fce5371026557f623f55b2e02d316b91560a9ef73c85d6148c6cee?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
        className="my-auto aspect-[1.63] w-[13px] max-w-full shrink-0 self-center overflow-hidden object-contain object-center"
      />
      <div className="self-start text-lg leading-5 text-zinc-800">Cameras</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ec73dfac4e0fc8aa2056c7678866fa8c0fe66cf853b5a0b4eb4c46dc1370bb5?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
        className="my-auto aspect-[1.63] w-[13px] max-w-full shrink-0 self-center overflow-hidden object-contain object-center"
      />
      <div className="self-stretch text-lg leading-5 text-zinc-800">
        Categories
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4708650b913bc74aea9958dbc9f7b23051a378244797ed3aff50f0ad3dc9d2ff?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
        className="my-auto aspect-[1.63] w-[13px] max-w-full shrink-0 self-center overflow-hidden object-contain object-center"
      />
      <div className="self-start text-lg leading-5 text-zinc-800">Products</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac4b46e31abfd08d479ed8bb3b9dd938e28478ef2e722d24f1b5d2c7338413fc?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
        className="my-auto aspect-[1.63] w-[13px] max-w-full shrink-0 self-center overflow-hidden object-contain object-center"
      />
    </span>
    <span className="my-auto flex items-stretch gap-2.5 self-center">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41dc93115a721eba561af1b7ef7cd4226356a50abddb14c79d389140a82be3a1?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
        className="aspect-square w-5 max-w-full shrink-0 overflow-hidden object-contain object-center"
      />
      <div className="my-auto grow self-center whitespace-nowrap text-base leading-7 text-zinc-800 text-opacity-80">
        UP TO 60% off All Items
      </div>
    </span>
  </div>
);
const ContentSection: React.FC = () => (
  <span className="mt-7 flex w-full flex-col px-10 max-md:max-w-full max-md:px-5">
    <span className="flex items-stretch gap-5 self-start">
      <div className="text-base leading-7 text-zinc-800">Home</div>
      <div className="text-sm leading-7 text-zinc-800 text-opacity-80">
        / Products
      </div>
    </span>
    <span className="mt-6 flex w-full items-center justify-between gap-5 self-stretch bg-slate-50 p-6 max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <div className="my-auto text-2xl uppercase leading-8 text-zinc-800">
        Products
      </div>
      <span className="flex items-start justify-between gap-3.5 self-stretch">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfa6f911ce29139cf7255bf1929f1292ae9c9619d76413ba568587e6c35ed1a8?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
          className="aspect-[3.81] w-20 max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/84b8c8cff6604c1b46e27128a2b6760e65a4a18dacc915c36bf1b52f9e5432d5?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
          className="my-auto aspect-[1.6] w-4 max-w-full shrink-0 self-center overflow-hidden object-contain object-center"
        />
        <div className="my-auto self-center text-center text-base leading-5 text-black">
          SORT BY
        </div>
        <div className="my-auto grow self-center whitespace-nowrap text-sm leading-5 text-black">
          139 products
        </div>
      </span>
    </span>
    <div className="mt-20 self-stretch max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex w-[19%] flex-col items-stretch max-md:ml-0 max-md:w-full">
          <span className="mt-4 flex grow flex-col items-stretch max-md:mt-10">
            <div className="text-base leading-6 text-zinc-800 text-opacity-80">
              Filter:
            </div>
            <div className="mt-5 flex h-px shrink-0 flex-col bg-zinc-800 bg-opacity-20" />
            <span className="mt-5 flex items-stretch justify-between gap-5">
              <div className="text-base leading-6 text-zinc-800 text-opacity-80">
                Availability
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6853d905e71c5afba4fd637d5890c82178130e3f869e725cd21ec83071baba25?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                className="my-auto aspect-[1.67] w-2.5 max-w-full shrink-0 self-center overflow-hidden fill-black object-contain object-center"
              />
            </span>
            <div className="mt-7 flex items-stretch justify-between gap-5 pr-1.5">
              <div className="flex flex-col items-stretch">
                <span className="flex items-stretch justify-between gap-4">
                  <div className="flex h-[18px] w-[18px] shrink-0 flex-col rounded border border-solid border-black shadow-sm" />
                  <div className="my-auto self-center text-xs leading-6 text-zinc-800 text-opacity-80">
                    In stock
                  </div>
                </span>
                <span className="mt-4 flex items-stretch justify-between gap-4">
                  <div className="flex h-[18px] w-[18px] shrink-0 flex-col rounded border border-solid border-black shadow-sm" />
                  <div className="my-auto self-center text-xs leading-6 text-zinc-800 text-opacity-80">
                    Out of stock
                  </div>
                </span>
              </div>
              <span className="my-auto flex flex-col items-stretch self-center">
                <div className="whitespace-nowrap text-xs leading-6 text-zinc-800 text-opacity-80">
                  137
                </div>
                <div className="mt-6 whitespace-nowrap text-sm leading-6 text-zinc-800 text-opacity-80">
                  28
                </div>
              </span>
            </div>
            <div className="mt-7 flex h-px shrink-0 flex-col bg-zinc-800 bg-opacity-20" />
            <span className="mt-5 flex items-stretch justify-between gap-5 pr-4">
              <div className="text-base leading-6 text-zinc-800 text-opacity-80">
                Price
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6853d905e71c5afba4fd637d5890c82178130e3f869e725cd21ec83071baba25?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                className="aspect-[1.67] w-2.5 max-w-full shrink-0 self-start overflow-hidden fill-black object-contain object-center"
              />
            </span>
            <div className="mt-8 text-base leading-7 text-zinc-800">
              The highest price is $500.00
            </div>
            <div className="mt-6 flex h-0.5 shrink-0 flex-col border border-solid border-zinc-800" />
            <span className="mt-6 flex items-start justify-between gap-2.5">
              <div className="text-base leading-5 text-zinc-800">Price:</div>
              <div className="text-base leading-7 text-zinc-800 text-opacity-80">
                $ 0 - $500
              </div>
            </span>
            <div className="mt-8 flex h-px shrink-0 flex-col bg-zinc-800 bg-opacity-20" />
            <div className="mt-5 flex items-stretch justify-between gap-5 pr-4">
              <span className="flex flex-col items-stretch">
                <div className="whitespace-nowrap text-base leading-6 text-zinc-800 text-opacity-80">
                  Product type
                </div>
                <span className="mt-6 flex items-stretch justify-between gap-5">
                  <div className="flex h-[18px] w-[18px] shrink-0 flex-col rounded border border-solid border-black shadow-sm" />
                  <div className="mt-1.5 self-start text-xs leading-6 text-zinc-800 text-opacity-80">
                    Bags products
                  </div>
                </span>
                <span className="mt-2.5 flex items-stretch justify-between gap-5">
                  <div className="flex h-[18px] w-[18px] shrink-0 flex-col rounded border border-solid border-black shadow-sm" />
                  <div className="mt-1.5 self-start text-xs leading-6 text-zinc-800 text-opacity-80">
                    Beauty
                  </div>
                </span>
                <span className="mt-2.5 flex items-stretch justify-between gap-5">
                  <div className="flex h-[18px] w-[18px] shrink-0 flex-col rounded border border-solid border-black shadow-sm" />
                  <div className="my-auto self-center text-xs leading-6 text-zinc-800 text-opacity-80">
                    active ware
                  </div>
                </span>
                <span className="mt-2.5 flex items-stretch justify-between gap-5">
                  <div className="flex h-[18px] w-[18px] shrink-0 flex-col rounded border border-solid border-black shadow-sm" />
                  <div className="my-auto self-center text-xs leading-6 text-zinc-800 text-opacity-80">
                    Fashion Acc
                  </div>
                </span>
                <span className="mt-2.5 flex items-stretch justify-between gap-5">
                  <div className="flex h-[18px] w-[18px] shrink-0 flex-col rounded border border-solid border-black shadow-sm" />
                  <div className="mt-1.5 self-start text-xs leading-6 text-zinc-800 text-opacity-80">
                    Jewelry
                  </div>
                </span>
              </span>
              <span className="my-auto flex flex-col self-center max-md:hidden">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6853d905e71c5afba4fd637d5890c82178130e3f869e725cd21ec83071baba25?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                  className="aspect-[2] w-3 self-center overflow-hidden fill-black object-contain object-center"
                />
                <div className="mt-8 self-stretch whitespace-nowrap text-xs leading-6 text-zinc-800 text-opacity-80">
                  25
                </div>
                <div className="mt-5 self-stretch whitespace-nowrap text-xs leading-6 text-zinc-800 text-opacity-80">
                  10
                </div>
                <div className="mt-5 self-stretch whitespace-nowrap text-xs leading-6 text-zinc-800 text-opacity-80">
                  6
                </div>
                <div className="mt-5 self-stretch whitespace-nowrap text-xs leading-6 text-zinc-800 text-opacity-80">
                  11
                </div>
                <div className="mt-5 self-stretch whitespace-nowrap text-xs leading-6 text-zinc-800 text-opacity-80">
                  14
                </div>
              </span>
            </div>
          </span>
        </div>
        <div className="ml-5 flex w-[27%] flex-col items-stretch max-md:ml-0 max-md:w-full">
          <span className="flex flex-col items-stretch max-md:mt-9">
            <div className="relative flex aspect-square w-full flex-col items-stretch justify-center overflow-hidden">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="relative flex flex-col items-stretch border border-solid border-black pb-px pt-2.5">
                <div className="flex flex-col items-stretch px-3">
                  <div className="flex items-start justify-between gap-5 px-0.5">
                    <span className="mt-1 aspect-[2.526315789473684] items-stretch justify-center whitespace-nowrap rounded-md border border-solid border-white border-opacity-10 bg-neutral-900 px-3.5 py-1.5 text-center text-xs leading-3 text-white">
                      -21%
                    </span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d6160120f56c81a62a72cfce26ee7847d12fee688cc6b62c6ce187f52c972c8?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                      className="aspect-square w-8 max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
                    />
                  </div>
                  <div className="mt-3.5 flex w-16 max-w-full items-center gap-2.5 self-end">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/199df69c7b47766f2f3b1ff639860259e84b9a47f20c3f67d498dcc0cb940a83?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                      className="my-auto aspect-square w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd17eb0ea8a82dd103c6dc43d5715c37596fc2b45fbfa25332e1c4e2d07b8f37?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                      className="aspect-square w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                    />
                  </div>
                </div>
                <div className="mt-64 flex w-full flex-col items-center justify-center bg-black px-16 py-2.5 max-md:mt-10 max-md:px-5">
                  <span className="flex items-stretch gap-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/827dc16919095241cc539ebdc5e8d0c72d2983bd38a6bb76cbda47348a7722e9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                      className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden stroke-white stroke-[1.125px] object-contain object-center"
                    />
                    <div className="my-auto self-center text-base leading-5 text-white">
                      Add to cart
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 text-base leading-5 text-zinc-800">
              Art Deco design movement watch
            </div>
            <span className="mt-4 flex items-stretch gap-3 self-start">
              <div className="text-base text-zinc-800 text-opacity-80">
                $70.00
              </div>
              <div className="text-base text-zinc-800">$55.00</div>
            </span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/540f62635d1b5749940b5d69388ce7bbd06d7027f48a8c81a5e7a5995b4e69ca?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
              className="mt-5 aspect-[4.05] w-[77px] max-w-full self-start overflow-hidden object-contain object-center"
            />
          </span>
        </div>
        <div className="ml-5 flex w-[27%] flex-col items-stretch max-md:ml-0 max-md:w-full">
          <span className="flex flex-col items-stretch max-md:mt-9">
            <div className="relative flex aspect-square w-full flex-col items-stretch justify-center overflow-hidden">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="relative flex flex-col items-stretch border border-solid border-black pb-px pt-2.5">
                <div className="flex flex-col items-stretch px-3">
                  <div className="flex items-start justify-between gap-5 max-md:mr-0.5">
                    <span className="mt-1 aspect-[2.526315789473684] items-stretch justify-center whitespace-nowrap rounded-md border border-solid border-white border-opacity-10 bg-neutral-900 px-3.5 py-1.5 text-center text-xs leading-3 text-white">
                      -21%
                    </span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/37ab7a99d6433c0af2593fa4efaabf17787dddeda7e8c63798ef3c267e2a554b?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                      className="aspect-square w-8 max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
                    />
                  </div>
                  <div className="mt-3.5 flex w-16 max-w-full items-center gap-2.5 self-end">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/199df69c7b47766f2f3b1ff639860259e84b9a47f20c3f67d498dcc0cb940a83?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                      className="my-auto aspect-square w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e121beb9637bc9035ccd36fa31531842072ef8344f5b0209123bcdf5711e5b51?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                      className="aspect-square w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                    />
                  </div>
                </div>
                <div className="mt-64 flex w-full flex-col items-center justify-center bg-black px-16 py-2.5 max-md:mt-10 max-md:px-5">
                  <span className="flex items-stretch gap-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/827dc16919095241cc539ebdc5e8d0c72d2983bd38a6bb76cbda47348a7722e9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                      className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden stroke-white stroke-[1.125px] object-contain object-center"
                    />
                    <div className="my-auto self-center text-base leading-5 text-white">
                      Add to cart
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 text-base leading-5 text-zinc-800">
              Art Deco design movement watch
            </div>
            <span className="mt-4 flex items-stretch gap-3 self-start">
              <div className="text-base text-zinc-800 text-opacity-80">
                $70.00
              </div>
              <div className="text-base text-zinc-800">$55.00</div>
            </span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b29a470c9c049b9d810aad2e865920687dbbac08016a2866185156ca74023b1?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
              className="mt-5 aspect-[4.05] w-[77px] max-w-full self-start overflow-hidden object-contain object-center"
            />
          </span>
        </div>
        <div className="ml-5 flex w-[27%] flex-col items-stretch max-md:ml-0 max-md:w-full">
          <span className="flex flex-col items-stretch max-md:mt-9">
            <div className="relative flex aspect-square w-full flex-col items-stretch justify-center overflow-hidden">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5ec6f0aaca54972c8127524967d38c5aa1824003e5103adfe9a7ca92f365d5b9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="relative flex flex-col items-stretch border border-solid border-black pb-px pt-2.5">
                <div className="flex flex-col items-stretch px-3">
                  <div className="flex items-start justify-between gap-5 max-md:mr-0.5">
                    <span className="mt-1 aspect-[2.526315789473684] items-stretch justify-center whitespace-nowrap rounded-md border border-solid border-white border-opacity-10 bg-neutral-900 px-3.5 py-1.5 text-center text-xs leading-3 text-white">
                      -21%
                    </span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a9c8925927e3f8b9d01200f8303e3ce66b858afe3a3fbcdf3011426b6b9739a?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                      className="aspect-square w-8 max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
                    />
                  </div>
                  <div className="mt-3.5 flex w-16 max-w-full items-center gap-2.5 self-end">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/199df69c7b47766f2f3b1ff639860259e84b9a47f20c3f67d498dcc0cb940a83?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                      className="my-auto aspect-square w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/09ccb28cd4ade0fc053686d4dc8ea588b85c97ee3ab3fdebdd0cb08b393a127b?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                      className="aspect-square w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                    />
                  </div>
                </div>
                <div className="mt-64 flex w-full flex-col items-center justify-center bg-black px-16 py-2.5 max-md:mt-10 max-md:px-5">
                  <span className="flex items-stretch gap-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/827dc16919095241cc539ebdc5e8d0c72d2983bd38a6bb76cbda47348a7722e9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                      className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden stroke-white stroke-[1.125px] object-contain object-center"
                    />
                    <div className="my-auto self-center text-base leading-5 text-white">
                      Add to cart
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 text-base leading-5 text-zinc-800">
              Art Deco design movement watch
            </div>
            <span className="mt-4 flex items-stretch gap-3 self-start">
              <div className="text-base text-zinc-800 text-opacity-80">
                $70.00
              </div>
              <div className="text-base text-zinc-800">$55.00</div>
            </span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/35dfbe6eaa2455bf39ca1ff7ed62fea328ca73563779df9ec39163cc8aabfa17?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
              className="mt-5 aspect-[4.05] w-[77px] max-w-full self-start overflow-hidden object-contain object-center"
            />
          </span>
        </div>
      </div>
    </div>
    <span className="ml-28 mt-14 flex items-start justify-between gap-5 self-center max-md:mt-10">
      <span className="aspect-square h-[50px] items-center justify-center self-stretch whitespace-nowrap bg-neutral-100 px-6 text-base leading-7 text-zinc-800 max-md:px-5">
        1
      </span>
      <div className="my-auto self-center text-base leading-7 text-zinc-800">
        2
      </div>
      <div className="my-auto self-center text-base leading-7 text-zinc-800">
        3
      </div>
      <div className="my-auto self-center text-base leading-7 text-zinc-800">
        …
      </div>
      <div className="my-auto grow self-center whitespace-nowrap text-base leading-7 text-zinc-800">
        10
      </div>
    </span>
    <div className="mt-40 self-center whitespace-nowrap text-center text-3xl leading-10 text-zinc-800 max-md:mt-10">
      You may also like
    </div>
  </span>
);
const RelatedProductSection: React.FC = () => (
  <div className="ml-12 mr-12 mt-20 px-px max-md:mr-2.5 max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex w-3/12 flex-col items-stretch max-md:ml-0 max-md:w-full">
        <span className="flex grow flex-col items-stretch max-md:mt-8">
          <div className="relative flex aspect-square w-full flex-col items-stretch justify-center overflow-hidden">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5185c95003e38c52d4835ea6a14658f2d10a373b9e9b70c5c3f9305e420d69ad?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5185c95003e38c52d4835ea6a14658f2d10a373b9e9b70c5c3f9305e420d69ad?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5185c95003e38c52d4835ea6a14658f2d10a373b9e9b70c5c3f9305e420d69ad?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5185c95003e38c52d4835ea6a14658f2d10a373b9e9b70c5c3f9305e420d69ad?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5185c95003e38c52d4835ea6a14658f2d10a373b9e9b70c5c3f9305e420d69ad?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5185c95003e38c52d4835ea6a14658f2d10a373b9e9b70c5c3f9305e420d69ad?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5185c95003e38c52d4835ea6a14658f2d10a373b9e9b70c5c3f9305e420d69ad?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5185c95003e38c52d4835ea6a14658f2d10a373b9e9b70c5c3f9305e420d69ad?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="relative flex w-full flex-col items-center border-[0.919px] border-solid border-black pb-px pt-2.5">
              <div className="flex w-[326px] max-w-full items-start justify-between gap-5">
                <span className="mt-1 aspect-[2.588235294117647] items-stretch justify-center whitespace-nowrap rounded-md border-[0.919px] border-solid border-white border-opacity-10 bg-neutral-900 px-3 py-1.5 text-center text-xs leading-3 text-white">
                  -21%
                </span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c17950188c012d5abfb16d5106e45d8b0192a32e941d21de5579bf666534117?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                  className="aspect-[0.97] w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                />
              </div>
              <div className="mt-3 flex w-[59px] max-w-full items-center gap-2.5 self-end">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bd3f89f2ac501ce068ce99602ece1d7340002fdc68b72c2f1e648d563d42a63?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                  className="my-auto aspect-square w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8477b7c226a5d9bdd4562dd36ecabb514229773bb9c3a98d8dcb62a2c88ba5e?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                  className="aspect-square w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                />
              </div>
              <div className="mt-60 flex w-full flex-col items-center justify-center self-stretch bg-black px-16 py-2.5 max-md:mt-10 max-md:px-5">
                <span className="flex items-stretch gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4843da37ece7976bab47a96255cfeb3ff5734984ead2dbf24c24d19a59acb0f?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                    className="aspect-square w-[18px] max-w-full shrink-0 overflow-hidden stroke-white stroke-[1.034px] object-contain object-center"
                  />
                  <div className="my-auto self-center text-base leading-5 text-white">
                    Add to cart
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 text-base leading-5 text-zinc-800">
            Art Deco design movement watch
          </div>
          <span className="mt-3.5 flex items-stretch gap-3 self-start">
            <div className="text-sm text-zinc-800 text-opacity-80">$70.00</div>
            <div className="text-sm text-zinc-800">$55.00</div>
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0afaf8eef4bad0fd7af58d15a526a89ead88c2ca816b49071483f5f1ff6db2f8?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
            className="mt-5 aspect-[3.94] w-[71px] max-w-full self-start overflow-hidden object-contain object-center"
          />
        </span>
      </div>
      <div className="ml-5 flex w-3/12 flex-col items-stretch max-md:ml-0 max-md:w-full">
        <span className="flex grow flex-col items-stretch max-md:mt-8">
          <div className="relative flex aspect-square w-full flex-col items-stretch justify-center overflow-hidden">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/33f022c5d2acc2238cad0349770af83468c83c6af4a64d8a18da48cbe0597f58?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33f022c5d2acc2238cad0349770af83468c83c6af4a64d8a18da48cbe0597f58?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33f022c5d2acc2238cad0349770af83468c83c6af4a64d8a18da48cbe0597f58?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33f022c5d2acc2238cad0349770af83468c83c6af4a64d8a18da48cbe0597f58?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33f022c5d2acc2238cad0349770af83468c83c6af4a64d8a18da48cbe0597f58?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33f022c5d2acc2238cad0349770af83468c83c6af4a64d8a18da48cbe0597f58?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33f022c5d2acc2238cad0349770af83468c83c6af4a64d8a18da48cbe0597f58?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/33f022c5d2acc2238cad0349770af83468c83c6af4a64d8a18da48cbe0597f58?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="relative flex w-full flex-col items-center border-[0.919px] border-solid border-black pb-px pt-2.5">
              <div className="flex w-[326px] max-w-full items-start justify-between gap-5">
                <span className="mt-1 aspect-[2.588235294117647] items-stretch justify-center whitespace-nowrap rounded-md border-[0.919px] border-solid border-white border-opacity-10 bg-neutral-900 px-3 py-1.5 text-center text-xs leading-3 text-white">
                  -21%
                </span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b75ee2ef817793856d67c3609c0e63b2c970058749e12a0b597743fed1439302?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                  className="aspect-square w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                />
              </div>
              <div className="mt-3 flex w-[59px] max-w-full items-center gap-2.5 self-end">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c21710aec599dae5723e3b9a0168b2d201237b52c21a743950531d052e1fac1?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                  className="my-auto aspect-square w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeb67c2e2732eab45ea72e538e3e2128d8e4bd2784f5b7b674fcd09a98607dcc?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                  className="aspect-[1.03] w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                />
              </div>
              <div className="mt-60 flex w-full flex-col items-center justify-center self-stretch bg-black px-16 py-2.5 max-md:mt-10 max-md:px-5">
                <span className="flex items-stretch gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/42b955867be6dcd64908ba39dbba7b9752ff018048bffd974cf53fe7d1d76f57?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                    className="aspect-square w-[18px] max-w-full shrink-0 overflow-hidden stroke-white stroke-[1.034px] object-contain object-center"
                  />
                  <div className="my-auto self-center text-base leading-5 text-white">
                    Add to cart
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 text-base leading-5 text-zinc-800">
            Art Deco design movement watch
          </div>
          <span className="mt-3.5 flex items-stretch gap-3 self-start">
            <div className="text-sm text-zinc-800 text-opacity-80">$70.00</div>
            <div className="text-sm text-zinc-800">$55.00</div>
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8437ee5747ba155c867f06b9f985b8d487338a74c93791e69eb2b564b285182?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
            className="mt-5 aspect-[3.94] w-[71px] max-w-full self-start overflow-hidden object-contain object-center"
          />
        </span>
      </div>
      <div className="ml-5 flex w-3/12 flex-col items-stretch max-md:ml-0 max-md:w-full">
        <span className="flex grow flex-col items-stretch max-md:mt-8">
          <div className="relative flex aspect-square w-full flex-col items-stretch justify-center overflow-hidden">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a509128b1c6223b1712ad7e8b39cd33f7e54d2d45f35ea8d6213ed46c99652ee?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a509128b1c6223b1712ad7e8b39cd33f7e54d2d45f35ea8d6213ed46c99652ee?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a509128b1c6223b1712ad7e8b39cd33f7e54d2d45f35ea8d6213ed46c99652ee?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a509128b1c6223b1712ad7e8b39cd33f7e54d2d45f35ea8d6213ed46c99652ee?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a509128b1c6223b1712ad7e8b39cd33f7e54d2d45f35ea8d6213ed46c99652ee?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a509128b1c6223b1712ad7e8b39cd33f7e54d2d45f35ea8d6213ed46c99652ee?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a509128b1c6223b1712ad7e8b39cd33f7e54d2d45f35ea8d6213ed46c99652ee?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a509128b1c6223b1712ad7e8b39cd33f7e54d2d45f35ea8d6213ed46c99652ee?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="relative flex w-full flex-col items-center border-[0.919px] border-solid border-black pb-px pt-2.5">
              <div className="flex w-[326px] max-w-full items-start justify-between gap-5">
                <span className="mt-1 aspect-[2.588235294117647] items-stretch justify-center whitespace-nowrap rounded-md border-[0.919px] border-solid border-white border-opacity-10 bg-neutral-900 px-3 py-1.5 text-center text-xs leading-3 text-white">
                  -21%
                </span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a4bce9dfc25a83102205c281badbf33a47820747c005bd3c1caeaf584b5c5a3?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                  className="aspect-square w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                />
              </div>
              <div className="mt-3 flex w-[59px] max-w-full items-center gap-2.5 self-end">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae3f8de8441a8c95f749ac8769bb89c666f2c70cd4589c6a83c1509b80bd5a0e?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                  className="my-auto aspect-square w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d81c1eaf8b26304cecd0f378cd10616a01be793dafdd4030bb10236305c80da9?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                  className="aspect-[1.03] w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                />
              </div>
              <div className="mt-60 flex w-full flex-col items-center justify-center self-stretch bg-black px-16 py-2.5 max-md:mt-10 max-md:px-5">
                <span className="flex items-stretch gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8871426a1b84db03d2766c8d0628c54f0a115d8bf6b1cf3c4e658fe05000a25a?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                    className="aspect-square w-[18px] max-w-full shrink-0 overflow-hidden stroke-white stroke-[1.034px] object-contain object-center"
                  />
                  <div className="my-auto self-center text-base leading-5 text-white">
                    Add to cart
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 text-base leading-5 text-zinc-800">
            Art Deco design movement watch
          </div>
          <span className="mt-3.5 flex items-stretch gap-3 self-start">
            <div className="text-sm text-zinc-800 text-opacity-80">$70.00</div>
            <div className="text-sm text-zinc-800">$55.00</div>
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/777e12ca861bd3872de09bf86ad3cdb5093ca1ca934440c6a112ecdc12b7e711?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
            className="mt-5 aspect-[3.94] w-[71px] max-w-full self-start overflow-hidden object-contain object-center"
          />
        </span>
      </div>
      <div className="ml-5 flex w-3/12 flex-col items-stretch max-md:ml-0 max-md:w-full">
        <span className="flex grow flex-col items-stretch max-md:mt-8">
          <div className="relative flex aspect-square w-full flex-col items-stretch justify-center overflow-hidden">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/00e612273a52ef688f5219bfdf175f62bacc992b78a55f622149cb2f18198ba2?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/00e612273a52ef688f5219bfdf175f62bacc992b78a55f622149cb2f18198ba2?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/00e612273a52ef688f5219bfdf175f62bacc992b78a55f622149cb2f18198ba2?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/00e612273a52ef688f5219bfdf175f62bacc992b78a55f622149cb2f18198ba2?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/00e612273a52ef688f5219bfdf175f62bacc992b78a55f622149cb2f18198ba2?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/00e612273a52ef688f5219bfdf175f62bacc992b78a55f622149cb2f18198ba2?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/00e612273a52ef688f5219bfdf175f62bacc992b78a55f622149cb2f18198ba2?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/00e612273a52ef688f5219bfdf175f62bacc992b78a55f622149cb2f18198ba2?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="relative flex w-full flex-col items-center border-[0.919px] border-solid border-black pb-px pt-2.5">
              <div className="flex w-[326px] max-w-full items-start justify-between gap-5">
                <span className="mt-1 aspect-[2.588235294117647] items-stretch justify-center whitespace-nowrap rounded-md border-[0.919px] border-solid border-white border-opacity-10 bg-neutral-900 px-3 py-1.5 text-center text-xs leading-3 text-white">
                  -21%
                </span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/282c1a3438c971892243fa794b1573cce3ebdfe0ea982edf4198598a5cc5bd45?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                  className="aspect-square w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                />
              </div>
              <div className="mt-3 flex w-[59px] max-w-full items-center gap-2.5 self-end">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd5442fed8f211d5ebaf0a6c65622ec212c02af7a6717881ac510da1c8741966?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                  className="my-auto aspect-square w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/959c9ba780d1dce94ecd868080965643775a46de4fcecf9bf9b496d829ac0f9d?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                  className="aspect-[1.03] w-full flex-1 shrink-0 overflow-hidden object-contain object-center"
                />
              </div>
              <div className="mt-60 flex w-full flex-col items-center justify-center self-stretch bg-black px-16 py-2.5 max-md:mt-10 max-md:px-5">
                <span className="flex items-stretch gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6cbf4f548bd66395c95b9e6326c0e102011c973cde7035c79265880477e87d7?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                    className="aspect-square w-[18px] max-w-full shrink-0 overflow-hidden stroke-white stroke-[1.034px] object-contain object-center"
                  />
                  <div className="my-auto self-center text-base leading-5 text-white">
                    Add to cart
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 text-base leading-5 text-zinc-800">
            Art Deco design movement watch
          </div>
          <span className="mt-3.5 flex items-stretch gap-3 self-start">
            <div className="text-sm text-zinc-800 text-opacity-80">$70.00</div>
            <div className="text-sm text-zinc-800">$55.00</div>
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/674526a63379cb90f4c857e95760dbc1d19da0d0ee6b4fc28da1dcb86e78d841?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
            className="mt-5 aspect-[3.94] w-[71px] max-w-full self-start overflow-hidden object-contain object-center"
          />
        </span>
      </div>
    </div>
  </div>
);
const FooterSection: React.FC = () => (
  <div className="mt-20 flex w-full flex-col items-stretch bg-slate-50 px-12 py-11 max-md:mt-10 max-md:max-w-full max-md:px-5">
    <div className="mt-9 flex w-full items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
      <div className="self-stretch max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex w-[73%] flex-col items-stretch max-md:ml-0 max-md:w-full">
            <span className="flex flex-col items-start max-md:mt-10">
              <div className="self-stretch text-xl leading-7 text-zinc-800">
                About us
              </div>
              <div className="mt-10 self-stretch text-base leading-7 text-zinc-800 text-opacity-80">
                The exciting contemporary brand Suruchi is known for its
                attention to detail and premium graphics.
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f50b1c6fe9216c4d80b906f1e8e375ec3dad4c66b0461c174eafa3e362adfca3?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
                className="mt-9 aspect-[6.5] w-[117px] max-w-full overflow-hidden object-contain object-center"
              />
            </span>
          </div>
          <div className="ml-5 flex w-[27%] flex-col items-stretch max-md:ml-0 max-md:w-full">
            <span className="flex grow flex-col items-stretch max-md:mt-10">
              <div className="whitespace-nowrap text-xl leading-7 text-zinc-800">
                Quick Links
              </div>
              <div className="mt-9 text-base leading-7 text-zinc-800 text-opacity-80">
                FAQ
              </div>
              <div className="mt-5 whitespace-nowrap text-base leading-7 text-zinc-800 text-opacity-80">
                Find store location
              </div>
              <div className="mt-6 text-sm leading-7 text-zinc-800 text-opacity-80">
                Privacy Policy
              </div>
              <div className="mt-5 text-base leading-7 text-zinc-800 text-opacity-80">
                Refund Policy
              </div>
              <div className="mt-5 whitespace-nowrap text-sm leading-7 text-zinc-800 text-opacity-80">
                Terms of Service
              </div>
            </span>
          </div>
        </div>
      </div>
      <span className="flex basis-[0%] flex-col items-stretch self-stretch">
        <div className="text-xl leading-7 text-zinc-800">Company</div>
        <div className="mt-9 text-base leading-7 text-zinc-800 text-opacity-80">
          Wishlist
        </div>
        <div className="mt-6 text-sm leading-7 text-zinc-800 text-opacity-80">
          My account
        </div>
        <div className="mt-5 whitespace-nowrap text-sm leading-7 text-zinc-800 text-opacity-80">
          Product compare
        </div>
        <div className="mt-5 text-sm leading-7 text-zinc-800 text-opacity-80">
          Cart
        </div>
        <div className="mt-6 text-base leading-7 text-zinc-800 text-opacity-80">
          About us
        </div>
      </span>
      <span className="flex grow basis-[0%] flex-col items-stretch">
        <div className="text-xl leading-7 text-zinc-800">Newsletter</div>
        <div className="mt-10 whitespace-nowrap text-base leading-7 text-zinc-800 text-opacity-80">
          Write your email first to know about our latest offers
        </div>
        <div className="mt-8 flex w-full items-stretch justify-between gap-5 rounded bg-white px-3.5 py-3 shadow-sm">
          <span className="flex items-stretch justify-between gap-3.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/391e0b03145e8698097e4f8cdc1aae8d081d85acab35d943115bd41df4128a45?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
              className="aspect-square w-6 max-w-full shrink-0 overflow-hidden object-contain object-center"
            />
            <div className="my-auto grow self-center whitespace-nowrap text-base leading-7 text-zinc-800 text-opacity-80">
              Your email address
            </div>
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/270f9c6d291cd3059a97d06cb20443766b9e0b7829984bbce6edc35a08e6c828?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
            className="aspect-square w-6 max-w-full shrink-0 overflow-hidden object-contain object-center"
          />
        </div>
      </span>
    </div>
    <div className="mt-20 flex h-px shrink-0 flex-col bg-zinc-800 bg-opacity-10 max-md:mt-10 max-md:max-w-full" />
    <span className="mt-9 flex items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
      <div className="my-auto w-[258px] text-base leading-4 text-zinc-800 text-opacity-80">
        © 2024, Developed By K. B. Tanvir
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/89bfac9bd8cb9133506acdcd19a906d868f439638e61e4c1efcaa24ac387009b?apiKey=da85e7e8aa194b7592d4b6becf2fde0c&"
        className="aspect-[11.58] w-[278px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"
      />
    </span>
  </div>
);
export default function ShopPage() {
  return (
    <div className=" ">
      <TopBar />
      <MainHeader />
      <NavigationSection />
      <ContentSection />
      <RelatedProductSection />
      <FooterSection />
    </div>
  );
}
