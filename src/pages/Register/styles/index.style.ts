import tw from "twin.macro";

export const Section = tw.section`!mt-[100px]`;
export const ImageWrapper = tw.figure`absolute inset-0 -z-10 max-w-[500px] shrink-0 opacity-10 lg:static lg:-translate-y-14 lg:translate-x-0 lg:opacity-100`;
export const ContentWrapper = tw.article`flex w-full flex-col items-center`
export const Form = tw.form`mt-10 flex w-full max-w-[500px] flex-col gap-6`
export const FormGroup = tw.div`flex w-full flex-col gap-1`;
export const ErrorMessage = tw.span`text-sm text-red-500`;
export const OptionWrapper = tw.div`flex flex-wrap justify-end gap-1`