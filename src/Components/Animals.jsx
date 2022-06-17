import Animal from './Animal';
const animals = [
  {
    id: 1,
    img: 'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg',
    animal: 'Fennec Fox',
  },
  {
    id: 2,
    img: 'https://www.healio.com/~/media/slack-news/infectious-disease/misc/infographics/2021/12_december/idn1221teres_graphic_01_web.jpg',
    animal: 'Hippo',
  },
  {
    id: 3,
    img: 'https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_16x9.jpg',
    animal: 'Panda',
  },
  {
    id: 4,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg/1200px-Wildlife_at_Maasai_Mara_%28Lion%29.jpg',
    animal: 'Lion',
  },

  {
    id: 5,
    img: 'https://images.theconversation.com/files/285143/original/file-20190722-11355-1peled7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
    animal: 'Zebra',
  },
  {
    id: 6,
    img: 'https://www.cbc.ca/kids/images/chinaanimals_header.jpg',
    animal: 'Red panda',
  },
  {
    id: 7,
    img: 'https://cdn.vox-cdn.com/thumbor/RElRKAhpwVi7mZCgYZwJUE-G4mA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23266609/GettyImages_131967915.jpg',
    animal: 'Pig',
  },
  {
    id: 8,
    img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/14632/production/_111860538_gettyimages-1129310243.jpg',
    animal: 'Kangaroo',
  },
];

const Animals = () => {
  return (
    <>
      <div>
        {animals.map((animal) => (
          <Animal key={animal.id} name={animal.animal} photo={animal.img} />
        ))}
      </div>
    </>
  );
};

export default Animals;
