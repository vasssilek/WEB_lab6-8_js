class Notebook {
    constructor(name, k) {
        this.name = name;
        if(k>0){
            this.k = k;
        }
        else{
            this.k = 1;
        }
    }

    Price() {
        return 15 * this.k;
    }
}

class GeneralNotebook extends Notebook {
    constructor(name, k, coverMaterial) {
        super(name, k);
        this.coverMaterial = coverMaterial;
    }

    Price() {
        return super.Price() + 50;   // +50 грн за обкладинку
    }
}

function show(id, value) {
    document.getElementById(id).innerHTML = value;
}

function notebookPriceCount() {
    let name1 = document.getElementById("nbName").value;
    let k1 = parseInt(document.getElementById("nbPages").value);

    let name2 = document.getElementById("gnName").value;
    let k2 = parseInt(document.getElementById("gnPages").value);
    let cover = document.getElementById("gnCover").value;

    let nb = new Notebook(name1, k1);
    let gnb = new GeneralNotebook(name2, k2, cover);

    show("price_nb", nb.Price() + " грн");
    show("price_gnb", gnb.Price() + " грн");
}